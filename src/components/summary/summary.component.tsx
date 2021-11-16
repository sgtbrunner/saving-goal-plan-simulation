import { SummaryProps, FormatCurrencyType } from './summary.types';
import {
  SummaryContainer,
  MonthlyAmountContainer,
  SummaryTextContainer,
} from './summary.styles';

const USDCurrencyFormatter = (digits: number): Intl.NumberFormat =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: digits,
  });

const formatUSDCurrency = ({ value, digits = 2 }: FormatCurrencyType): string =>
  USDCurrencyFormatter(digits).format(value);

const Summary = ({
  goalAmount,
  reachDateMonth,
  reachDateYear,
  monthlyAmount,
  monthlyDeposits,
}: SummaryProps): JSX.Element => (
  <SummaryContainer>
    <MonthlyAmountContainer>
      <h4>Monthly amount</h4>
      <p>{formatUSDCurrency({ value: monthlyAmount })}</p>
    </MonthlyAmountContainer>
    <SummaryTextContainer>
      <p>
        You’re planning <strong>{`${monthlyDeposits} monthly deposits`}</strong>{' '}
        to reach your{' '}
        <strong>{formatUSDCurrency({ value: goalAmount, digits: 0 })}</strong>{' '}
        goal by{' '}
        <strong>
          {reachDateMonth} {reachDateYear}
        </strong>
        .
      </p>
    </SummaryTextContainer>
  </SummaryContainer>
);

export default Summary;
