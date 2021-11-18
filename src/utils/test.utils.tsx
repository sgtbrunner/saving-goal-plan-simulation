import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../redux/root-reducer';
import { INITIAL_GOAL_AMOUNT } from './constants.utils';
import { getDate, monthFormatter, yearFormatter } from './functions.utils';
import { SavingGoalState } from './types.utils';

// TAG CONSTANTS
export const ALT = 'alt';
export const BANNER = 'banner';
export const BUTTON = 'button';
export const IMG = 'img';
export const TEST = 'test';
export const AMOUNT = 'amount';

// TEST ID CONSTANTS
export const CARD = 'card';
export const MAIN_COMPONENT = 'main-component';
export const MAIN_TITLE = 'main-title';
export const MONTHLY_AMOUNT = 'monthly-amount';
export const SUMMARY_TEXT = 'summary-text';
export const CURRENCY_INPUT = 'currency-input';

// FUNCTIONS
export const getDefaultSavingGoal = (): SavingGoalState => {
  const today = getDate();
  const nextMonth = today.setMonth(today.getMonth() + 1, 1);
  return {
    goalAmount: INITIAL_GOAL_AMOUNT,
    reachDateYear: yearFormatter.format(nextMonth),
    reachDateMonth: monthFormatter.format(nextMonth),
    monthlyAmount: INITIAL_GOAL_AMOUNT,
    monthlyDeposits: 1,
  };
};

// RENDERER
type WrapperPropsType = {
  children: React.ReactNode | React.ReactNode[];
};

export const renderWithRedux = (
  component: React.ReactElement,
  store = createStore(rootReducer)
): RenderResult => {
  const ComponentWrapper = (props: WrapperPropsType) => (
    <Provider store={store}>{props.children}</Provider>
  );

  return render(component, {
    wrapper: ComponentWrapper as React.ComponentType,
  });
};
