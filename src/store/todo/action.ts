import { ADD_TODO, COMPLETE_TODO, TodoActionTypes } from './type';

export function addTodo(text: string): TodoActionTypes {
  return {
    type: ADD_TODO,
    text,
  }
}

export function completeTodo(index: number): TodoActionTypes {
  return {
    type: COMPLETE_TODO,
    index,
  }
}
