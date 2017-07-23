import values from 'lodash/values';
import keysIn from 'lodash/keysIn';


export const selectAllImages = (images) => (
  values(images.data)
);

export const selectAllComments = (comments) => (
  values(comments)
);

export const selectCommentsForPost = (comments, postId) => (
  console.log(values(comments))
);

export const selectSingleImage = ({ images }, id) => {
  const image = image.data[id] || {};

  return image;
};
