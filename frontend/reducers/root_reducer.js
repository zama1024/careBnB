import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ListingsReducer from './listing_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  listings: ListingsReducer
});

export default rootReducer;
