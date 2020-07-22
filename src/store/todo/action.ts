/**
 * action 파일에서 action creator를 정의한다.
 */
import { ActionCreator } from 'redux';
import { ADD_TODO, COMPLETE_TODO, TodoActionTypes } from './type';

export const addTodo: ActionCreator<TodoActionTypes> = (text: string) => {
  return {
    type: ADD_TODO,
    text,
  };
}

export const completeTodo: ActionCreator<TodoActionTypes> = (index: number) => {
  return {
    type: COMPLETE_TODO,
    index,
  };
}
