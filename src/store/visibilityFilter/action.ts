import { SET_VISIBILITY_FILTER, VisibilityFilterActionTypes, FilterType } from './type';

export function setVisibilityFilter(filter: FilterType): VisibilityFilterActionTypes {
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}