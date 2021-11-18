import { screen, RenderResult, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  AMOUNT,
  BUTTON,
  CURRENCY_INPUT,
  MONTHLY_AMOUNT,
  renderWithRedux,
  SUMMARY_TEXT,
} from '../../../utils/test.utils';
import buyAHouse from '../../../assets/icons/buy-a-house.svg';
import { CardProps } from '../card.types';
import Card from '../card.component';
import { ID, NEXT_BUTTON_ID } from '../../../utils/constants.utils';
import { getMonthPickerState } from '../../../utils/functions.utils';
import { formatUSDCurrency } from '../../summary/summary.component';

const defaultProps: CardProps = {
  subtitle: 'Saving goal',
  title: 'Buy a house',
  icon: buyAHouse,
};

const mountComponent = (newProps?: CardProps): RenderResult =>
  renderWithRedux(<Card {...defaultProps} {...newProps} />);

describe('Card component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  describe('user interaction events', () => {
    let inputField: HTMLElement;
    let nextButton: HTMLElement;

    beforeEach(() => {
      mountComponent();

      inputField = screen.getByTestId(CURRENCY_INPUT);
      expect(inputField).toBeInTheDocument();
      expect(inputField).toHaveProperty(ID, AMOUNT);

      nextButton = screen.getAllByRole(BUTTON)[1];
      expect(nextButton).toBeInTheDocument();
      expect(nextButton).toHaveProperty(ID, NEXT_BUTTON_ID);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it(`should calculate the monthly amount and monthly deposits and update the
        relevant data in the summary component when the input `, () => {
      const value = 15600;
      const steps = 14;
      // CHANGE THE CURRENCY INPUT TO $15,600
      fireEvent.change(inputField, { target: { value: value.toString() } });
      expect(inputField).toHaveValue('15,600');

      // CHANGE THE REACH GOAL MONTH TO 15 MONTHS AHEAD
      Array(steps)
        .fill(true)
        .forEach((repetition) => userEvent.click(nextButton));

      const { month: monthValue, year: yearValue } = getMonthPickerState(
        steps,
        1
      );

      const month = screen.getByText(monthValue);
      const year = screen.getByText(yearValue);

      expect(month).toBeInTheDocument();
      expect(year).toBeInTheDocument();

      // ASSERT FOR SUMMARY UPDATE
      const monthlyAmount = screen.getByTestId(MONTHLY_AMOUNT);
      expect(monthlyAmount).toHaveTextContent(/monthly amount/i);
      expect(monthlyAmount).toHaveTextContent(
        formatUSDCurrency({ value: value / (steps + 1) }).toString()
      );

      const summaryText = screen.getByTestId(SUMMARY_TEXT);
      expect(summaryText).toHaveTextContent(
        `You’re planning ${
          steps + 1
        } monthly deposits to reach your ${formatUSDCurrency({
          value,
        })} goal by ${monthValue} ${yearValue}.`
      );
    });
  });
});
