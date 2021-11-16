import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

export const IconContainer = styled.div`
  margin: 20px 14px 20px 18px;
  color: var(--blue-gray-100-color);
`;

export const Input = styled(CurrencyInput)`
  border: none;
  color: var(--blue-gray-600-color);
  font-family: var(--currency-font-family);
  font-size: var(--md-font-size);
  font-weight: var(--normal-font-weight);
  line-height: var(--md-line-height);
`;
