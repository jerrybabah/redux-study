import { VisibilityFilterState, SET_VISIBILITY_FILTER, VisibilityFilterActionTypes, FilterType } from './type';

const initialState: VisibilityFilterState = 'SHOW_ALL';

function setVisibilityFilter(filter: FilterType) {
  return filter;
}

export function visibilityFilterReducer(state = initialState, action: VisibilityFilterActionTypes): VisibilityFilterState {
  switch(action.type) {
    case SET_VISIBILITY_FILTER:
      return setVisibilityFilter(action.filter);
    default:
      return state;
  }
}