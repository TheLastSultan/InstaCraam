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
  byProfile: [],
  byFollowing: []
});

const ImageReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALL_IMAGES_FOR_USER:
    let ids = selectIds(action.images);

    return merge({}, state, {
      byId: action.images,
      byProfile: ids
    });



    case REMOVE_POST:
      let nextState = merge({}, state);
      console.log(nextState);
      debugger;
      delete nextState.byId[action.postId];
      return nextState;

    default:
      return state;
  }
};

export default ImageReducer;
