import merge from 'lodash/merge';

import {
  RECEIVE_ALL_IMAGES,
  RECEIVE_SINGLE_IMAGE,
  RECEIVE_ALL_IMAGES_FOR_USER
} from 'actions/image_actions';

const defaultState = () => ({
  data: {},
  currentImage: null
});

const ImageReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_IMAGES:
      return merge({}, state, { data: action.images });

    case RECEIVE_ALL_IMAGES_FOR_USER:
      return { data: action.images };

    case RECEIVE_SINGLE_IMAGE:
      const image = action.image;

      return merge({}, state, {
        data: { [image.id]: image },
        currentImage: image.id
      });

    default:
      return state;
  }
};

export default ImageReducer;
