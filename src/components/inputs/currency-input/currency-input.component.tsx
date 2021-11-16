import React, { useState } from 'react';

import { CurrencyInputProps } from './currency-input.types';
import { InputLabel, InputContainer } from '../../../styles/global.styles';
import { IconContainer, Input } from './currency-input.styles';

const clearInvalidCharacters = (value: string): string =>
  value.replace(/\D|^0+/g, '');

const convertInputToNumber = (value: string): number => {
  if (value.includes('.')) {
    const [decimalPart, fractionalPart] = value.split('.');
    return Number(
      [
        clearInvalidCharacters(decimalPart),
        '.',
        clearInvalidCharacters(fractionalPart),
      ].join('')
    );
  }

  return Number(value.replace(/\D|^0+/g, ''));
};

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

export default CurrencyInput;
