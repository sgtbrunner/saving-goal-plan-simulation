import React, { useState } from 'react';
import { connect } from 'react-redux';

import { updateAmount } from '../../../redux/saving-goal/saving-goal.actions';
import { Dispatch } from '../../../redux/saving-goal/saving-goal.types';
import { INITIAL_GOAL_AMOUNT } from '../../../utils/constants.utils';
import { getSignificantAndFractionalDigits } from '../../../utils/functions.utils';
import { CurrencyInputProps } from './currency-input.types';
import { InputLabel, InputContainer } from '../../../styles/global.styles';
import { IconContainer, Input } from './currency-input.styles';

const clearInvalidCharacters = (value: string): string =>
  value.replace(/\D|^0+/g, '');

const convertInputToNumber = (value: string): number => {
  if (value.includes('.')) {
    const [significantPart, fractionalPart] =
      getSignificantAndFractionalDigits(value);

    return Number(
      [
        clearInvalidCharacters(significantPart),
        '.',
        clearInvalidCharacters(fractionalPart),
      ].join('')
    );
  }

  return Number(clearInvalidCharacters(value));
};

const CurrencyInput = ({
  label,
  name = 'amount',
  symbol = '$',
  initialValue = INITIAL_GOAL_AMOUNT,
  updateAmount,
}: CurrencyInputProps): JSX.Element => {
  const [amount, setAmount] = useState(initialValue);

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const el = target as HTMLInputElement;
    const amount = convertInputToNumber(el.value);
    setAmount(amount);
    updateAmount(amount);
  };

  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <InputContainer>
        <IconContainer>
          <span>{symbol}</span>
        </IconContainer>
        <Input
          id={name}
          name={name}
          allowNegativeValue={false}
          decimalSeparator="."
          groupSeparator=","
          onChange={handleChange}
          disableAbbreviations
          defaultValue={amount}
        />
      </InputContainer>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateAmount: (amount: number) => dispatch(updateAmount(amount)),
});

export default connect(null, mapDispatchToProps)(CurrencyInput);
