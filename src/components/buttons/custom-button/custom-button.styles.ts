import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { CustomButtonStyles } from './custom-button.types';

const getButtonStyles = ({
  color,
  textColor,
}: CustomButtonStyles): FlattenSimpleInterpolation => css`
  background-color: var(--${color}-color, var(--primary-color));
  color: var(--${textColor}-color, var(--white-color));
`;

export const Button = styled.button`
  margin: 0 auto 0 auto;
  padding: 18px 124px;
  border-radius: 32px;
  font-weight: var(--semibold-font-weight);
  font-size: var(--xs-font-size);
  line-height: var(--xs-line-height);
  border: none;
  ${getButtonStyles}
`;
