import { screen, render, RenderResult } from '@testing-library/react';

import { BUTTON } from '../../../../utils/constants.utils';
import CustomButton from '../custom-button.component';
import { ButtonProps } from '../custom-button.types';

const defaultProps: ButtonProps = {
  children: 'This is a button!',
};

const mountComponent = (newProps?: ButtonProps): RenderResult =>
  render(<CustomButton {...defaultProps} {...newProps} />);

describe('CustomButton component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the children props as button text', () => {
    mountComponent();
    const customButton = screen.getByRole(BUTTON, {
      name: defaultProps.children,
    });
    expect(customButton).toBeInTheDocument();
  });

  it('should render the children new props as button text when new props are provided', () => {
    const text = 'This is another button';
    mountComponent({ children: text });
    const customButton = screen.getByRole(BUTTON, {
      name: text,
    });
    expect(customButton).toBeInTheDocument();
  });
});
