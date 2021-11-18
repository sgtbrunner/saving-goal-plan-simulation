import { screen, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import {
  CARD,
  MAIN_TITLE,
  getDefaultSavingGoal,
} from '../../../../utils/test.utils';
import Main from '../main.component';

const mockStore = configureMockStore();
const store = mockStore({ savingGoal: getDefaultSavingGoal() });

const mountComponent = (): RenderResult =>
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );

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
