import { combineReducers } from 'redux';
import savingGoalReducer from './saving-goal/saving-goal.reducer';

const rootReducer = combineReducers({
  savingGoal: savingGoalReducer,
});

export default rootReducer;
