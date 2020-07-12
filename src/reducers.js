import { combineReducers } from 'redux';
import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, COMPLETE_TODO } from './actions';

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todos: [],
};

function visibilityFilter(state = initialState.visibilityFilter, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = initialState.todos, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case COMPLETE_TODO:
      return [
        ...state.slice(0, action.index),
        Object.assign({}, state[action.index], {
          completed: true,
        }),
        ...state.slice(action.index + 1),
      ];
    default: {
      return state;
    }
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;