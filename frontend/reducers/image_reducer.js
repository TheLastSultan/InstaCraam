import merge from 'lodash/merge';
import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_SINGLE_IMAGE,
  RECEIVE_ALL_IMAGES_FOR_USER,
  REMOVE_POST
} from 'actions/image_actions';
import { selectIds } from './selectors';

const defaultState = () => ({
  byId: {},
  allIds: [],
  byProfile: [],
  byFollowing: []
});

const ImageReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  let ids, nextState;

  switch (action.type) {

    case RECEIVE_ALL_IMAGES:
      ids = selectIds(action.images);
      return merge({}, state, {
        byId: action.images,
        allIds: ids
      });

    case RECEIVE_ALL_IMAGES_FOR_USER:
      ids = selectIds(action.images);
      nextState = Object.assign({}, state, { byProfile: ids });

      return merge(nextState, {
          byId: action.images
      });

    case REMOVE_POST:
      nextState = merge({}, state);
      const idx = nextState.byProfile.indexOf(action.postId);
      delete nextState.byProfile[idx];
      delete nextState.byId[action.postId];
      return nextState;


    default:
      return state;
  }
};

export default ImageReducer;
