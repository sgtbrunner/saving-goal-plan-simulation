import { screen, RenderResult } from '@testing-library/react';
import {
  MONTHLY_AMOUNT,
  SUMMARY_TEXT,
  renderWithRedux,
  getDefaultSavingGoal,
} from '../../../utils/test.utils';
import Summary, { formatUSDCurrency } from '../summary.component';

const mountComponent = (): RenderResult => renderWithRedux(<Summary />);

describe('Summary component', () => {
  const savingGoal = getDefaultSavingGoal();

  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the default monthly amount', () => {
    mountComponent();

    const monthlyAmount = screen.getByTestId(MONTHLY_AMOUNT);
    expect(monthlyAmount).toHaveTextContent(/monthly amount/i);
    expect(monthlyAmount).toHaveTextContent(
      formatUSDCurrency({ value: savingGoal.monthlyAmount })
    );
  });

  it('should render the correct summary text', () => {
    mountComponent();
    const { monthlyDeposits, goalAmount, reachDateMonth, reachDateYear } =
      savingGoal;

    const summaryText = screen.getByTestId(SUMMARY_TEXT);
    expect(summaryText).toHaveTextContent(
      `You’re planning ${monthlyDeposits} monthly deposits to reach your ${formatUSDCurrency(
        { value: goalAmount }
      )} goal by ${reachDateMonth} ${reachDateYear}.`
    );
  });
});
