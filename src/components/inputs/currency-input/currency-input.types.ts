export type CurrencyInputProps = {
  label: string;
  name?: string;
  symbol?: string;
  initialValue?: string | number;
  updateAmount: DispatchUpdateAmountAction;
};

export type DispatchUpdateAmountAction = (amount: number) => void;
