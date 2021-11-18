import { screen, render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import {
  BANNER,
  MAIN_COMPONENT,
  getDefaultSavingGoal,
} from './utils/test.utils';
import App from './App';

const mockStore = configureMockStore();
const store = mockStore({ savingGoal: getDefaultSavingGoal() });

const mountComponent = (): RenderResult =>
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

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
