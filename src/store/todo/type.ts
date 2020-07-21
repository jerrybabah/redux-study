import { Action } from 'redux';

export interface ITodo {
  text: string;
  completed: boolean;
}

export type TodosState = ITodo[];

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

export interface AddTodoAction extends Action<typeof ADD_TODO> {
  text: string;
}

export interface CompoleteTodoAction extends Action<typeof COMPLETE_TODO> {
  index: number;
}

export type TodoActionTypes = AddTodoAction | CompoleteTodoAction;