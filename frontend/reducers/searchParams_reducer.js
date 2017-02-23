import { UPDATE_SEARCH_PARAMS } from '../actions/search_actions';


const SearchParamsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case UPDATE_SEARCH_PARAMS:
      return Object.assign({}, state, action.searchParams);
    default:
      return state;
  }
};
export default SearchParamsReducer;
