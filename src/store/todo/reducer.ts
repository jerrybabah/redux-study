import { TodosState, ADD_TODO, COMPLETE_TODO, TodoActionTypes } from './type';

const initialState: TodosState = [];

function addTodo(state: TodosState, text: string): TodosState {
  return [
    ...state,
    {
      text,
      completed: false,
    },
  ]
}

function completeTodo(state: TodosState, index: number): TodosState {
  state[index].completed = true;
  return [...state];
}

export function todosReducer(state = initialState, action: TodoActionTypes): TodosState {
  switch(action.type) {
    case ADD_TODO:
      return addTodo(state, action.text);
    case COMPLETE_TODO:
      return completeTodo(state, action.index);
    default:
      return state;
  }
}