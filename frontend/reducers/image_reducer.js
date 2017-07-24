import merge from 'lodash/merge';
import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_SINGLE_IMAGE,
  RECEIVE_ALL_IMAGES_FOR_USER
} from 'actions/image_actions';
import { selectAllId } from './selectors';

const defaultState = () => ({
  byId: {},
  allIds: [],
  byUser: {}
});

const ImageReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_IMAGES:
      return {
        byId: action.images,
        allIds: selectAllId(action.images),
        byUser: {}
      };
      // return merge({}, state, {
      //   byId: action.images,
      //   allIds: selectAllId(action.images),
      //   byUser: {}
      // });

    case RECEIVE_ALL_IMAGES_FOR_USER:
      return {
        // byId: {},
        // allIds: [],
        byUser: action.images
      };
      // return merge({}, state, {
      //   byUser: action.images
      // });

    // case RECEIVE_SINGLE_IMAGE:
    //   const image = action.image;
    //
    //   return merge({}, state, {
    //     currentImage: {
    //       [image.id]: image
    //     }
    //   });

    default:
      return state;
  }
};

export default ImageReducer;
