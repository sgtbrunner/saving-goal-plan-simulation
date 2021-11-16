import styled from 'styled-components';

import { SMALL_DEVICE_BREAKPOINT } from '../../../styles/global.styles';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.p`
  font-weight: var(--light-font-weight);
  font-size: var(--sm-font-size);
  line-height: var(--sm-line-height);
  color: var(--primary-color);
  margin: 0;
  padding: 32px 0 24px 0;

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    font-size: var(--md-font-size);
    line-height: var(--md-line-height);
  }
`;
