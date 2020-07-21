import { combineReducers } from 'redux';
import { todosReducer } from './todo/reducer';
import { visibilityFilterReducer } from './visibilityFilter/reducer';

export const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  todos: todosReducer,
});

export type RootState = ReturnType<typeof rootReducer>