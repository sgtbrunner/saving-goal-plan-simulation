import { MonthPickerInputState } from '../../utils/types.utils';

export const savingGoalTypes = {
  UPDATE_AMOUNT: 'UPDATE_AMOUNT',
  UPDATE_REACH_DATE: 'UPDATE_REACH_DATE',
};

export interface AmountActionReturn {
  type: typeof savingGoalTypes.UPDATE_AMOUNT;
  payload: number;
}

export interface ReachDateActionReturn {
  type: typeof savingGoalTypes.UPDATE_REACH_DATE;
  payload: MonthPickerInputState;
}

export type SavingGoalActions = ReachDateActionReturn | AmountActionReturn;

export type Dispatch = (action: SavingGoalActions) => void;
