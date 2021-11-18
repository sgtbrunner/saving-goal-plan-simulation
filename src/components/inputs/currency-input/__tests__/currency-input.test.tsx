import {
  screen,
  RenderResult,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import {
  AMOUNT,
  CURRENCY_INPUT,
  renderWithRedux,
} from '../../../../utils/test.utils';
import { CurrencyInputProps } from '../currency-input.types';
import CurrencyInput from '../currency-input.component';
import { ID } from '../../../../utils/constants.utils';

const defaultProps: CurrencyInputProps = {
  label: 'Total',
  updateAmount: jest.fn(),
};

const mountComponent = (newProps?: CurrencyInputProps): RenderResult =>
  renderWithRedux(<CurrencyInput {...defaultProps} {...newProps} />);

describe('CurrencyInput component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it(`should render input label with 'Total' text within the component`, () => {
    mountComponent();

    const label = screen.getByRole('textbox', { name: defaultProps.label });
    expect(label).toBeInTheDocument();
  });

  it('should render the input field with default value (25,000) within the component', () => {
    mountComponent();

    const inputField = screen.getByTestId(CURRENCY_INPUT);
    expect(inputField).toBeInTheDocument();
    expect(inputField).toHaveValue('25,000');
  });

  describe('user interaction events', () => {
    let inputField: HTMLElement;

    beforeEach(() => {
      mountComponent();

      inputField = screen.getByTestId(CURRENCY_INPUT);
      expect(inputField).toBeInTheDocument();
      expect(inputField).toHaveProperty(ID, AMOUNT);
    });

    afterEach(() => {
      jest.clearAllMocks();
    });

    it('should display the same value when the input is smaller than 1000', () => {
      fireEvent.change(inputField, { target: { value: '723' } });
      waitFor(() => {
        expect(inputField).toHaveValue('723');
        expect(defaultProps.updateAmount).toHaveBeenCalledTimes(1);
      });
    });

    it('should correctly format the value when the input is larger than 1000', () => {
      fireEvent.change(inputField, { target: { value: '2021' } });
      waitFor(() => {
        expect(inputField).toHaveValue('2,021');
        expect(defaultProps.updateAmount).toHaveBeenCalledTimes(1);
      });
    });

    it('should correctly format the value when the input is larger than 1000000', () => {
      fireEvent.change(inputField, { target: { value: '123456789' } });
      waitFor(() => {
        expect(inputField).toHaveValue('123,456,789');
        expect(defaultProps.updateAmount).toHaveBeenCalledTimes(1);
      });
    });

    it('should correctly format the value when the input has fraction digit', () => {
      fireEvent.change(inputField, { target: { value: '5006.48' } });
      waitFor(() => {
        expect(inputField).toHaveValue('5,006.48');
        expect(defaultProps.updateAmount).toHaveBeenCalledTimes(1);
      });
    });

    it('should correctly format the value to limit fracion digits when the input has many fraction digits', () => {
      fireEvent.change(inputField, { target: { value: '9547.123456' } });
      waitFor(() => {
        expect(inputField).toHaveValue('9,547.12');
        expect(defaultProps.updateAmount).toHaveBeenCalledTimes(1);
      });
    });
  });
});
