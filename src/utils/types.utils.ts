export type MonthPickerInputState = {
  step: number;
  year: string;
  month: string;
};

export type SavingGoalStoreProps = {
  goalAmount: number;
  reachDateMonth: string;
  reachDateYear: string;
  monthlyAmount: number;
  monthlyDeposits: number;
};

export type StoreState = {
  savingGoal: SavingGoalStoreProps;
};
