import values from 'lodash/values';
import keysIn from 'lodash/keysIn';


export const selectAllObjects = objs => (
  values(objs)
);

export const selectAllId = objs => (
  keysIn(objs).map(el => parseInt(el))
);









// export const selectAllObjects = images => (
//   values(images.byId)
// );



export const selectAllComments = (comments) => (
  values(comments.byId)
);

export const selectCommentsForPost = (comments, postId) => (
  console.log(values(comments))
);

export const selectSingleImage = ({ images }, id) => {
  const image = image.data[id] || {};

  return image;
};
