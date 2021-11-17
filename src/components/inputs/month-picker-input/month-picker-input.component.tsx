import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { updateReachDate } from '../../../redux/saving-goal/saving-goal.actions';
import { Dispatch } from '../../../redux/saving-goal/saving-goal.types';
import { FIRST_STEP } from '../../../utils/constants.utils';
import { LEFT, RIGHT } from '../../../utils/constants.utils';
import { getMonthPickerState } from '../../../utils/functions.utils';
import { MonthPickerInputState } from '../../../utils/types.utils';
import ArrowButton from '../../buttons/arrow-button/arrow-button.component';
import { MonthPickerInputProps } from './month-picker-input.types';
import {
  MonthPickerInputContainer,
  DateContainer,
  MonthParagraph,
  YearParagraph,
} from './month-picker-input.styles';
import { InputLabel } from '../../../styles/global.styles';

const STEP_INCREMENT = 1;
const STEP_DECREMENT = -1;
const KEYDOWN = 'keydown';
const KEYUP = 'keyup';
const PREVIOUS_BUTTON_ID = 'previous-month';
const NEXT_BUTTON_ID = 'next-month';

const MonthPickerInput = ({
  label,
  name = 'reachDate',
  updateReachDate,
}: MonthPickerInputProps): JSX.Element => {
  const monthPickerInitialState = getMonthPickerState();
  const [reachDate, setReachDate] = useState(monthPickerInitialState);
  const { step, month, year } = reachDate;

  const handleChange = (modifier: number) => {
    const newReachDate = getMonthPickerState(step, modifier);
    setReachDate(newReachDate);
    updateReachDate(newReachDate);
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateReachDate: (reachDate: MonthPickerInputState) =>
    dispatch(updateReachDate(reachDate)),
});

export default connect(null, mapDispatchToProps)(MonthPickerInput);
