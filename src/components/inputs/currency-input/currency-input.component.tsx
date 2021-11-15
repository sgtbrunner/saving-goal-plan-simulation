import React, { Fragment, useState } from 'react';

import { convertInputToNumber } from '../../../utils/function.utils';
import { CurrencyInputProps } from './currency-input.types';
import {
  CurrencyInputContainer,
  InputLabel,
  IconContainer,
  Input,
} from './currency-input.styles';

const CurrencyInput = ({
  label,
  name = 'amount',
  symbol = '$',
  initialValue = '25000',
}: CurrencyInputProps): JSX.Element => {
  const [amount, setAmount] = useState(initialValue);

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>): void => {
    const el = target as HTMLInputElement;
    setAmount(convertInputToNumber(el.value));
  };

  return (
    <Fragment>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <CurrencyInputContainer>
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
      </CurrencyInputContainer>
    </Fragment>
  );
};

export default CurrencyInput;
