import { screen, render, RenderResult, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { ID, LEFT } from '../../../../utils/constants.utils';
import { ALT, BUTTON, IMG, TEST } from '../../../../utils/test.utils';
import { ArrowButtonProps } from '../arrow-button.types';
import ArrowButton from '../arrow-button.component';

const defaultProps: ArrowButtonProps = {
  id: TEST,
  onClick: jest.fn(),
};

const mountComponent = (newProps?: ArrowButtonProps): RenderResult =>
  render(<ArrowButton {...defaultProps} {...newProps} />);

describe('ArrowButton component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it(`should render a right oriented arrow button if the default props only are provided`, () => {
    mountComponent();

    const arrowButton = screen.getByRole(BUTTON);
    expect(arrowButton).toBeInTheDocument();
    expect(arrowButton).toHaveProperty(ID, defaultProps.id);

    const buttonImage = within(arrowButton).getByRole(IMG);
    expect(buttonImage).toBeInTheDocument();
    expect(buttonImage).toHaveProperty(ALT, 'arrow-right');
  });

  it('should render a left oriented arrow button if the proper props are provided', () => {
    const newProps: ArrowButtonProps = {
      id: 'new-test',
      direction: LEFT,
    };
    mountComponent(newProps);

    const arrowButton = screen.getByRole(BUTTON);
    expect(arrowButton).toBeInTheDocument();
    expect(arrowButton).toHaveProperty(ID, newProps.id);

    const buttonImage = within(arrowButton).getByRole(IMG);
    expect(buttonImage).toBeInTheDocument();
    expect(buttonImage).toHaveProperty(ALT, 'arrow-left');
  });

  it('should call onClick function if button IS NOT disabled', () => {
    mountComponent();

    const arrowButton = screen.getByRole(BUTTON);
    userEvent.click(arrowButton);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('should NOT call onClick function if button IS disabled', () => {
    const newProps: ArrowButtonProps = {
      id: defaultProps.id,
      disabled: true,
    };
    mountComponent(newProps);

    const arrowButton = screen.getByRole(BUTTON);
    userEvent.click(arrowButton);
    expect(defaultProps.onClick).not.toHaveBeenCalled();
  });
});
