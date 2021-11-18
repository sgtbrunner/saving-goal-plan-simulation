import { connect } from 'react-redux';

import { MONTHLY_AMOUNT, SUMMARY_TEXT } from '../../utils/test.utils';
import { getSignificantAndFractionalDigits } from '../../utils/functions.utils';
import { SavingGoalState, StoreState } from '../../utils/types.utils';
import { FormatCurrencyType } from './summary.types';
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

export const formatUSDCurrency = ({
  value,
  digits = 2,
}: FormatCurrencyType): string => {
  const fullValue = USDCurrencyFormatter(digits).format(value);
  const [significantPart, fractionalPart] =
    getSignificantAndFractionalDigits(fullValue);
  return fractionalPart === '00' ? significantPart : fullValue;
};

const Summary = ({
  goalAmount,
  reachDateMonth,
  reachDateYear,
  monthlyAmount,
  monthlyDeposits,
}: SavingGoalState): JSX.Element => (
  <SummaryContainer>
    <MonthlyAmountContainer data-testid={MONTHLY_AMOUNT}>
      <h4>Monthly amount</h4>
      <p>{formatUSDCurrency({ value: monthlyAmount })}</p>
    </MonthlyAmountContainer>
    <SummaryTextContainer data-testid={SUMMARY_TEXT}>
      <p>
        You’re planning <strong>{`${monthlyDeposits} monthly deposits`}</strong>{' '}
        to reach your{' '}
        <strong>{formatUSDCurrency({ value: goalAmount })}</strong> goal by{' '}
        <strong>
          {reachDateMonth} {reachDateYear}
        </strong>
        .
      </p>
    </SummaryTextContainer>
  </SummaryContainer>
);

const mapStateToProps = ({
  savingGoal: {
    goalAmount,
    reachDateMonth,
    reachDateYear,
    monthlyAmount,
    monthlyDeposits,
  },
}: StoreState) => ({
  goalAmount,
  reachDateMonth,
  reachDateYear,
  monthlyAmount,
  monthlyDeposits,
});

export default connect(mapStateToProps)(Summary);
