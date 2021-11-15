import styled from 'styled-components';

import { SMALL_DEVICE_BREAKPOINT } from '../../styles/styles.constants';

export const ActionCardContainer = styled.div`
  background-color: var(--white-color);
  border-radius: 8px;
  width: 100%;
  height: 586px;
  margin-bottom: 63px;

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    font-size: var(--md-font-size);
    line-height: var(--md-line-height);
    width: 560px;
    height: 511px;
    margin-bottom: 96px;
  }
`;
