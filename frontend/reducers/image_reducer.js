import merge from 'lodash/merge';

import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_SINGLE_IMAGE,
  REMOVE_IMAGE
} from '../actions/image_actions';

const defaultState = () => ({
  data: {},
  currentImage: null
});

const ImageReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_IMAGES:
      return merge({}, state, { data: action.posts });

    case RECEIVE_SINGLE_IMAGE:
      const post = action.post;
      return merge({}, state, {
        data: { [post.id]: post },
        currentPost: post.id
      });

    case REMOVE_IMAGE:
      let nextState = merge({}, state);
      delete nextState.data[action.postId];
      return nextState;

    default:
      return state;
  }
};

export default ImageReducer;
