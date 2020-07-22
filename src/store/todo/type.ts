/**
 * type 파일에서 state의 타입, action의 type 프로퍼티 타입, action 타입을 정의한다.
 */
import { Action } from 'redux';

/**
 * state 타입
 */
export interface ITodo {
  text: string;
  completed: boolean;
}

export type TodosState = ITodo[];

/**
 * action type 프로퍼티의 타입
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';

/**
 * action 타입
 */
export interface AddTodoAction extends Action<typeof ADD_TODO> {
  text: string;
}

export interface CompoleteTodoAction extends Action<typeof COMPLETE_TODO> {
  index: number;
}

export type TodoActionTypes = AddTodoAction | CompoleteTodoAction;