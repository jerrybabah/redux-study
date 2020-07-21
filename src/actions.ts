/**
 * action 파일에서 무얼 다뤄야 하나?
 * action creator만 다룬다.
 * action creator: function
 */
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, TodoActionTypes, VisibilityFilterActionTypes, FilterType } from './types';

/**
 * action creator
 */
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

export function setVisibilityFilter(filter: FilterType): VisibilityFilterActionTypes {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}