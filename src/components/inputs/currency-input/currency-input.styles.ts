import styled from 'styled-components';
import CurrencyInput from 'react-currency-input-field';

import { SMALL_DEVICE_BREAKPOINT } from '../../../styles/styles.constants';

export const InputLabel = styled.label`
  font-size: var(--xxxs-font-size);
  line-height: var(--xxs-line-height);
  font-weight: var(--light-font-weight);
  color: var(--blue-gray-900-color);
  
  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    font-size: var(--xxs-font-size);
    line-height: var(--sm-line-height):
    }
`;

export const CurrencyInputContainer = styled.div`
  display: flex;
  font-size: var(--md-font-size);
  border: 1px solid var(--blue-gray-50-color);

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    font-size: var(--lg-font-size);
    width: 100%;
  }
`;

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
