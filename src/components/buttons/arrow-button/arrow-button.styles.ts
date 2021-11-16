import styled, { css, FlattenSimpleInterpolation } from 'styled-components';

import { ArrowButtonProps } from './arrow-button.types';

const getArrowDirection = ({
  direction,
}: ArrowButtonProps): FlattenSimpleInterpolation => css`
  transform: rotate(${direction === 'right' ? '0deg' : '180deg'});
`;

export const Button = styled.button`
  padding: 20px;
  border: none;
  background-color: transparent;
  color: var(--blue-gray-300-color);
  ${getArrowDirection}
`;
