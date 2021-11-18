import { INITIAL_GOAL_AMOUNT } from './constants.utils';
import { getDate, monthFormatter, yearFormatter } from './functions.utils';
import { SavingGoalState } from './types.utils';

// TAGS
export const ALT = 'alt';
export const BANNER = 'banner';
export const BUTTON = 'button';
export const IMG = 'img';
export const TEST = 'test';

// TEST IDs
export const CARD = 'card';
export const MAIN_COMPONENT = 'main-component';
export const MAIN_TITLE = 'main-title';
export const MONTHLY_AMOUNT = 'monthly-amount';
export const SUMMARY_TEXT = 'summary-text';

// FUNCTIONS
export const getDefaultSavingGoal = (): SavingGoalState => {
  const today = getDate();
  const nextMonth = today.setMonth(today.getMonth() + 1, 1);
  return {
    goalAmount: INITIAL_GOAL_AMOUNT,
    reachDateYear: yearFormatter.format(nextMonth),
    reachDateMonth: monthFormatter.format(nextMonth),
    monthlyAmount: INITIAL_GOAL_AMOUNT,
    monthlyDeposits: 1,
  };
};
