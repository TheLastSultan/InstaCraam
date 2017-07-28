import merge from 'lodash/merge';
import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_SINGLE_IMAGE,
  RECEIVE_ALL_IMAGES_FOR_USER,
  REMOVE_POST,
  RECEIVE_LIKE,
  REMOVE_LIKE
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

  let ids, nextState, postId, postObj, idx;

  const copyState = Object.assign({}, state);

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

    case RECEIVE_SINGLE_IMAGE:
      postId = action.image.id;
      copyState.byId[postId] = action.image;
      copyState.allIds.push(postId);
      copyState.byProfile.push(postId);
      return copyState;

    case REMOVE_POST:
      nextState = merge({}, state);
      idx = nextState.byProfile.indexOf(action.postId);
      nextState.byProfile.splice(idx, 1);
      delete nextState.byId[action.postId];
      return nextState;

    case RECEIVE_LIKE:
      postId = action.like.likableId;

      copyState.byId[postId].likesCount += 1;
      copyState.byId[postId].likedBy.push(action.like.likerId);

      return copyState;

    case REMOVE_LIKE:
      postId = action.like.likableId;
      postObj = copyState.byId[postId];
      idx = postObj.likedBy.indexOf(action.like.likerId);

      copyState.byId[postId].likesCount -= 1;
      copyState.byId[postId].likedBy.splice(idx, 1);

      return copyState;

    default:
      return state;
  }
};

export default ImageReducer;
