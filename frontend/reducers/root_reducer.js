import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import ImageReducer from './image_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  images: ImageReducer
});

export default RootReducer;
