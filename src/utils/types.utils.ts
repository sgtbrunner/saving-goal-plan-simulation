export type MonthPickerInputState = {
  step: number;
  year: string;
  month: string;
};

export type SavingGoalState = {
  goalAmount: number;
  reachDateMonth: string;
  reachDateYear: string;
  monthlyAmount: number;
  monthlyDeposits: number;
};

export type StoreState = {
  savingGoal: SavingGoalState;
};
