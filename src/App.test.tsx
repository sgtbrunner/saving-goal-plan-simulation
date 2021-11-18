import { screen, RenderResult } from '@testing-library/react';

import { BANNER, MAIN_COMPONENT, renderWithRedux } from './utils/test.utils';
import App from './App';

const mountComponent = (): RenderResult => renderWithRedux(<App />);

describe('App', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render the header section within the App', () => {
    mountComponent();

    const header = screen.getByRole(BANNER);
    expect(header).toBeInTheDocument();
  });

  it('should render the main section within the App', () => {
    mountComponent();

    const mainSection = screen.getByTestId(MAIN_COMPONENT);
    expect(mainSection).toBeInTheDocument();
  });
});
