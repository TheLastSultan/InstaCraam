import values from 'lodash/values';
import keysIn from 'lodash/keysIn';

export const selectAllObjects = objs => (
  values(objs)
);

export const selectIds = objs => (
  keysIn(objs).map(el => parseInt(el))
);

export const selectAllComments = (comments) => (
  values(comments.byId)
);

export const selectSingleImage = ({ images }, id) => {
  const image = image.data[id] || {};

  return image;
};
