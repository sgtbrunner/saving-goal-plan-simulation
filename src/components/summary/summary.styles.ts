import styled from 'styled-components';

import { SMALL_DEVICE_BREAKPOINT } from '../../styles/global.styles';

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--blue-gray-50-color);
  border-radius: 8px;
  margin: 24px 0 32px 0;
  width: 100%;

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    max-width: 490px;
  }
`;

export const MonthlyAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 24px 32px;

  h4 {
    margin: 0;
    font-size: var(--sm-font-size);
    line-height: var(--sm-line-height);
    font-weight: var(--light-font-weight);
    color: var(--blue-gray-900-color);
  }

  p {
    margin: 0;
    font-size: var(--lg-font-size);
    line-height: var(--lg-line-height);
    font-weight: var(--normal-font-weight);
    color: var(--secondary-color);
  }

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    h4 {
      font-size: var(--md-font-size);
      line-height: var(--md-line-height);
    }

    p {
      font-size: var(--xlg-font-size);
      line-height: var(--xlg-line-height);
    }
  }
`;

export const SummaryTextContainer = styled.div`
  background-color: var(--blue-gray-10-color);
  text-align: center;
  min-height: 80px;
  padding-top: 8px;

  p {
    font-size: var(--xxxs-font-size);
    line-height: var(--xxxs-line-height);
    font-weight: var(--light-font-weight);
    color: var(--blue-gray-900-color);
    margin: 0;
    padding: 24px 32px;
  }

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    text-align: left;
  }
`;
