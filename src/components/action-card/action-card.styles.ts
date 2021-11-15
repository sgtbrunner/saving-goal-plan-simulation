import styled from 'styled-components';

import { SMALL_DEVICE_BREAKPOINT } from '../../styles/styles.constants';

export const ActionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 31px 24px 24px 24px;
  background-color: var(--white-color);
  border-radius: 8px;
  margin-bottom: 63px;
  width: 100%;

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    padding: 35px 40px 40px 40px;
    font-size: var(--md-font-size);
    line-height: var(--md-line-height);
    margin-bottom: 96px;
    width: auto;
  }
`;

export const CardTitle = styled.div`
  display: flex;
  align-items: center;

  img {
    padding-right: 24px;
  }

  h1,
  p {
    margin: 0;
  }

  h1 {
    font-weight: var(--normal-font-weight);
    font-size: var(--md-font-size);
    line-height: var(--md-line-height);
    color: var(--blue-gray-900-color);
    padding-bottom: 4px;
  }

  p {
    font-weight: var(--light-font-weight);
    font-size: var(--xxs-font-size);
    line-height: var(--xs-line-height);
    color: var(--blue-gray-400-color);
  }

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    h1 {
      font-size: var(--lg-font-size);
      line-height: var(--lg-line-height);
    }

    p {
      font-size: var(--xs-font-size);
      line-height: var(--md-line-height);
    }
  }
`;
