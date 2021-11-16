import { useState } from 'react';

import ArrowButton from '../../buttons/arrow-button/arrow-button.component';
import { MonthPickerInputProps } from './month-picker-input.types';
import {
  MonthPickerInputContainer,
  DateContainer,
  MonthParagraph,
  YearParagraph,
} from './month-picker-input.styles';
import { InputLabel } from '../../../styles/global.styles';

const MonthPickerInput = ({
  label,
  name = 'reachDate',
}: MonthPickerInputProps): JSX.Element => {
  const [reachDate, setReachDate] = useState({ month: 'November', year: 2021 });
  const { month, year } = reachDate;
  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <MonthPickerInputContainer>
        <ArrowButton direction="left" aria-label="Previous month" />
        <DateContainer>
          <MonthParagraph>{month}</MonthParagraph>
          <YearParagraph>{year}</YearParagraph>
        </DateContainer>
        <ArrowButton direction="right" aria-label="Next month" />
      </MonthPickerInputContainer>
    </div>
  );
};

export default MonthPickerInput;
