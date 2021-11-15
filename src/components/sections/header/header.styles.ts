import styled from 'styled-components';

import { SMALL_DEVICE_BREAKPOINT } from '../../../styles/styles.constants';

export const LogoContainer = styled.header`
  background-color: var(--white-color);
  padding: 16px;

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    padding: 24px 56px;
  }
`;

export const Logo = styled.img`
  height: 24px;
  width: 75px;

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    height: 32px;
    width: 100px;
  }
`;
