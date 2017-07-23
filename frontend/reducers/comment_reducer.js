import merge from 'lodash/merge';

import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_ALL_COMMENTS_FOR_POST
} from 'actions/comment_actions';

const defaultState = () => ({
});

const ImageReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return action.comments;

    case RECEIVE_ALL_COMMENTS_FOR_POST:
    console.log(action.comments);
      
      return merge({}, state, action.comments);


    default:
      return state;
  }
};

export default ImageReducer;
