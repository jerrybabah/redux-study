import { Action } from 'redux';

export type FilterType = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export type VisibilityFilterState = FilterType

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export interface SetVisibilityFilterAction extends Action<typeof SET_VISIBILITY_FILTER> {
  filter: FilterType;
}

export type VisibilityFilterActionTypes = SetVisibilityFilterAction;