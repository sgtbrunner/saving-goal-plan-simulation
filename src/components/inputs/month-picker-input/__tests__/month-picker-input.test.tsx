import {
  fireEvent,
  screen,
  RenderResult,
  waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BUTTON, renderWithRedux } from '../../../../utils/test.utils';
import { MonthPickerInputProps } from '../month-picker-input.types';
import MonthPickerInput from '../month-picker-input.component';
import {
  ID,
  NEXT_BUTTON_ID,
  PREVIOUS_BUTTON_ID,
  ARROW_LEFT,
  ARROW_RIGHT,
} from '../../../../utils/constants.utils';
import { getMonthPickerState } from '../../../../utils/functions.utils';

const defaultProps: MonthPickerInputProps = {
  label: 'Date',
  updateReachDate: jest.fn(),
};

const mountComponent = (newProps?: MonthPickerInputProps): RenderResult =>
  renderWithRedux(<MonthPickerInput {...defaultProps} {...newProps} />);

describe('MonthPickerInput component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the month picker input label', () => {
    mountComponent();

    const label = screen.getByText(defaultProps.label);
    expect(label).toBeInTheDocument();
  });

  it('should render 2 (two) arrow button components within the rendered component', () => {
    mountComponent();

    const buttons = screen.getAllByRole(BUTTON);
    expect(buttons).toHaveLength(2);
  });

  it('should render the default month picker input values', () => {
    mountComponent();
    const { month: monthValue, year: yearValue } = getMonthPickerState();

    const month = screen.getByText(monthValue);
    const year = screen.getByText(yearValue);

    expect(month).toBeInTheDocument();
    expect(year).toBeInTheDocument();
  });

  describe('user interaction events', () => {
    let previousButton: HTMLElement;
    let nextButton: HTMLElement;

    const ARROW_UP = 'ArrowUp';
    const ARROW_DOWN = 'ArrowDown';

    beforeEach(() => {
      mountComponent();

      previousButton = screen.getAllByRole(BUTTON)[0];
      expect(previousButton).toBeInTheDocument();
      expect(previousButton).toHaveProperty(ID, PREVIOUS_BUTTON_ID);

      nextButton = screen.getAllByRole(BUTTON)[1];
      expect(nextButton).toBeInTheDocument();
      expect(nextButton).toHaveProperty(ID, NEXT_BUTTON_ID);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('previous month button should be disabled by default', () => {
      expect(previousButton).toBeDisabled();
    });

    it('date update function should not be called when clicking on disabled previous button', () => {
      userEvent.click(previousButton);
      expect(defaultProps.updateReachDate).not.toHaveBeenCalled();
    });

    it('should increment and decrement the date displayed when clicking on arrow buttons', () => {
      // CLICKS ON NEXT BUTTON
      userEvent.click(nextButton);
      waitFor(() => {
        expect(defaultProps.updateReachDate).toHaveBeenCalledTimes(1);
      });

      // ASSERTS FOR NEW DATE STATE
      const { month: monthValue, year: yearValue } = getMonthPickerState(1, 1);

      const month = screen.getByText(monthValue);
      const year = screen.getByText(yearValue);

      expect(month).toBeInTheDocument();
      expect(year).toBeInTheDocument();

      // CLICKS ON PREVIOUS BUTTON
      userEvent.click(previousButton);
      waitFor(() => {
        expect(defaultProps.updateReachDate).toHaveBeenCalledTimes(1);
      });

      // ASSERTS FOR DEFAULT STATE
      const { month: defaultMonthValue, year: defaultYearValue } =
        getMonthPickerState();

      const defaultMonth = screen.getByText(defaultMonthValue);
      const defaultYear = screen.getByText(defaultYearValue);

      expect(defaultMonth).toBeInTheDocument();
      expect(defaultYear).toBeInTheDocument();
    });

    it('should call for update date when pressing arrow buttons on keyboard', () => {
      nextButton.focus();
      // PRESS ARROW RIGHT KEYBOARD BUTTON
      fireEvent.keyDown(nextButton, { key: ARROW_RIGHT, code: ARROW_RIGHT });
      waitFor(() => {
        expect(defaultProps.updateReachDate).toHaveBeenCalledTimes(1);
      });

      // PRESS ARROW RIGHT KEYBOARD BUTTON
      fireEvent.keyDown(nextButton, { key: ARROW_LEFT, code: ARROW_LEFT });
      waitFor(() => {
        expect(defaultProps.updateReachDate).toHaveBeenCalledTimes(1);
      });
    });

    it('should NOT call for update date when any different key is pressed down', () => {
      nextButton.focus();
      fireEvent.keyDown(nextButton, { key: ARROW_UP, code: ARROW_UP });
      expect(defaultProps.updateReachDate).not.toHaveBeenCalled();

      fireEvent.keyDown(nextButton, { key: ARROW_DOWN, code: ARROW_DOWN });
      expect(defaultProps.updateReachDate).not.toHaveBeenCalled();
    });
  });
});
