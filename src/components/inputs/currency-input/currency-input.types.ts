export type CurrencyInputProps = {
  label: string;
  name?: string;
  symbol?: string;
  initialValue?: string | number;
  updateAmount: DispatchUpdateAmountActionType;
};

export type DispatchUpdateAmountActionType = (amount: number) => void;
