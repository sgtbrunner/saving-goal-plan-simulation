import { screen, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import { MONTHLY_AMOUNT, SUMMARY_TEXT } from '../../../utils/test.utils';
import { SavingGoalState } from '../../../utils/types.utils';
import Summary, { formatUSDCurrency } from '../summary.component';

const savingGoal: SavingGoalState = {
  goalAmount: 15600,
  reachDateMonth: 'February',
  reachDateYear: '2023',
  monthlyAmount: 1040,
  monthlyDeposits: 15,
};

const mockStore = configureMockStore();
const store = mockStore({ savingGoal });

const mountComponent = (): RenderResult =>
  render(
    <Provider store={store}>
      <Summary />
    </Provider>
  );

describe('Summary component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the correct monthly amount', () => {
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
