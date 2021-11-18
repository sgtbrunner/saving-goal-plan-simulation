import { FIRST_STEP, LOCALE } from './constants.utils';
import { MonthPickerInputState } from './types.utils';

export const getDate = (customDate?: string | number): Date =>
  customDate ? new Date(customDate) : new Date();

export const monthFormatter = new Intl.DateTimeFormat(LOCALE, {
  month: 'long',
});

export const yearFormatter = new Intl.DateTimeFormat(LOCALE, {
  year: 'numeric',
});

export const getMonthPickerState = (
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

export const getSignificantAndFractionalDigits = (
  value: string
): Array<string> => value.split('.');
