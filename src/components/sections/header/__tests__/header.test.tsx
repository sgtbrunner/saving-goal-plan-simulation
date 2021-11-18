import { screen, render, RenderResult, within } from '@testing-library/react';

import { ORIGIN } from '../../../../utils/constants.utils';
import { ALT, BANNER, IMG } from '../../../../utils/test.utils';
import Header from '../header.component';

const mountComponent = (): RenderResult => render(<Header />);

describe('Header component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render Origin icon on header', () => {
    mountComponent();

    const header = screen.getByRole(BANNER);
    expect(header).toBeInTheDocument();

    const headerLogo = within(header).getByRole(IMG);
    expect(headerLogo).toBeInTheDocument();
    expect(headerLogo).toHaveProperty(ALT, ORIGIN);
  });
});
