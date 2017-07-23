import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorReducer from './error_reducer';
import ImageReducer from './image_reducer';
import ProfileReducer from './profile_reducer';
import CommentReducer from './comment_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorReducer,
  images: ImageReducer,
  profile: ProfileReducer,
  comments: CommentReducer
});

export default RootReducer;
