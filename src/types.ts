/**
 * types 파일에서는 무엇을 다루나?
 * -> action types, action, custrom type related to action
 * action type: string
 * action: AnyAction
 */
import { Action } from 'redux';

/**
 * action types
 */
export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/**
 * custom type
 */
export type FilterType = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

/**
 * action
 */
export interface AddTodoAction extends Action<typeof ADD_TODO> {
  text: string;
}

export interface CompoleteTodoAction extends Action<typeof COMPLETE_TODO> {
  index: number;
}

export interface SetVisibilityFilterAction extends Action<typeof SET_VISIBILITY_FILTER> {
  filter: FilterType;
}

/**
 * action type group by state property
 */
export type TodoActionTypes = AddTodoAction | CompoleteTodoAction;
export type VisibilityFilterActionTypes = SetVisibilityFilterAction;