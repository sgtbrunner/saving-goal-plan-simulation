export type MonthPickerInputProps = {
  label: string;
  name?: string;
};

export interface MonthPickerInputState {
  step: number;
  year: string;
  month: string;
}
