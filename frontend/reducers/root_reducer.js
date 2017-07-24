import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ImageReducer from './image_reducer';
import CommentReducer from './comment_reducer';
import ProfileReducer from './profile_reducer';
import ErrorReducer from './error_reducer';

const RootReducer = combineReducers({
  images: ImageReducer,
  comments: CommentReducer,
  profile: ProfileReducer,
  errors: ErrorReducer,
  session: SessionReducer,
});

export default RootReducer;
