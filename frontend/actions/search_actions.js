import {receiveListings} from './listing_actions';
export const UPDATE_SEARCH_PARAMS = "UPDATE_SEARCH_PARAMS";
export function updateSearchParams(searchParams) {
  return {
    type: UPDATE_SEARCH_PARAMS,
    searchParams
  };
}
