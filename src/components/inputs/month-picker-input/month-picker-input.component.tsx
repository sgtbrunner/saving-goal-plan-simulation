import { useEffect, useState } from 'react';

import ArrowButton from '../../buttons/arrow-button/arrow-button.component';
import { LEFT, RIGHT } from '../../buttons/arrow-button/arrow-button.types';
import {
  MonthPickerInputProps,
  MonthPickerInputState,
} from './month-picker-input.types';
import {
  MonthPickerInputContainer,
  DateContainer,
  MonthParagraph,
  YearParagraph,
} from './month-picker-input.styles';
import { InputLabel } from '../../../styles/global.styles';

const FIRST_STEP = 1;
const STEP_INCREMENT = 1;
const STEP_DECREMENT = -1;
const LOCALE = 'en';
const KEYDOWN = 'keydown';
const KEYUP = 'keyup';
const PREVIOUS_BUTTON_ID = 'previous-month';
const NEXT_BUTTON_ID = 'next-month';

export const getDate = (customDate?: string | number): Date =>
  customDate ? new Date(customDate) : new Date();

const monthFormatter = new Intl.DateTimeFormat(LOCALE, {
  month: 'long',
});

const yearFormatter = new Intl.DateTimeFormat(LOCALE, {
  year: 'numeric',
});

const getMonthPickerState = (
  step = FIRST_STEP,
  modifier = 0
): MonthPickerInputState => {
  const today = getDate();
  const targetMonthISO = today.setMonth(today.getMonth() + step + modifier, 1);

  return {
    step: step + modifier,
    year: yearFormatter.format(targetMonthISO),
    month: monthFormatter.format(targetMonthISO),
  };
};

const MonthPickerInput = ({
  label,
  name = 'reachDate',
}: MonthPickerInputProps): JSX.Element => {
  const monthPickerInitialState = getMonthPickerState();
  const [reachDate, setReachDate] = useState(monthPickerInitialState);
  const { step, month, year } = reachDate;

  const handleChange = (modifier: number) => {
    const newReachDate = getMonthPickerState(step, modifier);
    setReachDate(newReachDate);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    const target = event.target as HTMLButtonElement;
    if (target.id === NEXT_BUTTON_ID || target.id === PREVIOUS_BUTTON_ID) {
      if (event.key === 'ArrowRight') {
        handleChange(STEP_INCREMENT);
      } else if (event.key === 'ArrowLeft' && step !== FIRST_STEP) {
        handleChange(STEP_DECREMENT);
      }
    }

    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyUp = () => {
    document.addEventListener(KEYDOWN, handleKeyDown, { once: true });
  };

  useEffect(() => {
    document.addEventListener(KEYDOWN, handleKeyDown);
    document.addEventListener(KEYUP, handleKeyUp);

    return function cleanup() {
      document.removeEventListener(KEYDOWN, handleKeyDown);
      document.removeEventListener(KEYUP, handleKeyUp);
    };
  });

  return (
    <div>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      <MonthPickerInputContainer>
        <ArrowButton
          id={PREVIOUS_BUTTON_ID}
          aria-label="Previous month"
          direction={LEFT}
          disabled={step === FIRST_STEP}
          onClick={() => handleChange(STEP_DECREMENT)}
        />
        <DateContainer>
          <MonthParagraph>{month}</MonthParagraph>
          <YearParagraph>{year}</YearParagraph>
        </DateContainer>
        <ArrowButton
          id={NEXT_BUTTON_ID}
          aria-label="Next month"
          direction={RIGHT}
          onClick={() => handleChange(STEP_INCREMENT)}
        />
      </MonthPickerInputContainer>
    </div>
  );
};

export default MonthPickerInput;
