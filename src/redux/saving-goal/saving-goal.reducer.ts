import { getMonthPickerState } from '../../utils/functions.utils';
import { INITIAL_GOAL_AMOUNT } from '../../utils/constants.utils';
import {
  SavingGoalState,
  MonthPickerInputState,
} from '../../utils/types.utils';
import { savingGoalTypes, SavingGoalActions } from './saving-goal.types';
import { calculateMonthlyAmount } from './saving-goal.utils';

const getSavingGoalInitialState = (): SavingGoalState => {
  const {
    step: monthlyDeposits,
    month: reachDateMonth,
    year: reachDateYear,
  } = getMonthPickerState();
  return {
    goalAmount: INITIAL_GOAL_AMOUNT,
    reachDateMonth,
    reachDateYear,
    monthlyAmount: INITIAL_GOAL_AMOUNT,
    monthlyDeposits,
  };
};

const savingGoalReducer = (
  state = getSavingGoalInitialState(),
  action: SavingGoalActions
): SavingGoalState => {
  let payload;
  switch (action.type) {
    case savingGoalTypes.UPDATE_AMOUNT:
      payload = action.payload as number;
      return {
        ...state,
        goalAmount: action.payload as number,
        monthlyAmount: calculateMonthlyAmount(payload, state.monthlyDeposits),
      };
    case savingGoalTypes.UPDATE_REACH_DATE:
      payload = action.payload as MonthPickerInputState;
      return {
        ...state,
        monthlyDeposits: payload.step,
        reachDateMonth: payload.month,
        reachDateYear: payload.year,
        monthlyAmount: calculateMonthlyAmount(state.goalAmount, payload.step),
      };
    default:
      return state;
  }
};

export default savingGoalReducer;
