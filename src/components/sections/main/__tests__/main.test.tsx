import { screen, RenderResult } from '@testing-library/react';

import {
  CARD,
  MAIN_TITLE,
  renderWithRedux,
} from '../../../../utils/test.utils';
import Main from '../main.component';

const mountComponent = (): RenderResult => renderWithRedux(<Main />);

describe('Main component', () => {
  it('should match snapshot', () => {
    const { container } = mountComponent();

    expect(container).toMatchSnapshot();
  });

  it('should render main section title', () => {
    mountComponent();

    const title = screen.getByTestId(MAIN_TITLE);
    expect(title).toBeInTheDocument();
  });

  it('should render main section card', () => {
    mountComponent();

    const card = screen.getByTestId(CARD);
    expect(card).toBeInTheDocument();
  });
});
