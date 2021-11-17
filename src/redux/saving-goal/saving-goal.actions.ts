import { MonthPickerInputState } from '../../utils/types.utils';
import {
  savingGoalTypes,
  AmountActionReturn,
  ReachDateActionReturn,
} from './saving-goal.types';

export const updateAmount = (amount: number): AmountActionReturn => ({
  type: savingGoalTypes.UPDATE_AMOUNT,
  payload: amount,
});

export const updateReachDate = (
  reachDate: MonthPickerInputState
): ReachDateActionReturn => ({
  type: savingGoalTypes.UPDATE_REACH_DATE,
  payload: reachDate,
});
