import styled from 'styled-components';

import {
  SMALL_DEVICE_BREAKPOINT,
  InputContainer,
} from '../../../styles/global.styles';

export const MonthPickerInputContainer = styled(InputContainer)`
  justify-content: space-between;
  align-items: center;
  min-height: 66px;
  min-width: 188px;
`;

export const DateContainer = styled.div`
  font-size: var(--xxs-font-size);
  line-height: var(--sm-line-height);
  text-align: center;

  p {
    margin: 0;
  }

  @media (min-width: ${SMALL_DEVICE_BREAKPOINT}px) {
    font-size: var(--xs-font-size);
    line-height: var(--md-line-height);
  }
`;

export const MonthParagraph = styled.p`
  font-weight: var(--semibold-font-weight);
  color: var(--blue-gray-900-color);
`;

export const YearParagraph = styled.p`
  font-weight: var(--light-font-weight);
  color: var(--blue-gray-400-color);
`;
