export type SummaryProps = {
  goalAmount: number;
  reachDateMonth: string;
  reachDateYear: string;
  monthlyAmount: number;
  monthlyDeposits: number;
};

export type FormatCurrencyType = {
  value: number;
  digits?: number;
};
