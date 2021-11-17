import { MonthPickerInputState } from '../../../utils/types.utils';

export type MonthPickerInputProps = {
  label: string;
  name?: string;
  updateReachDate: DispatchUpdateReachDateAction;
};

export type DispatchUpdateReachDateAction = (
  reachDate: MonthPickerInputState
) => void;
