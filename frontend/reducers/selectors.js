import values from 'lodash/values';

export const selectAllImages = (images) => (
  // console.log(images.data)
  values(images.data)
);

export const selectSingleImage = ({ images }, id) => {
  const image = image.data[id] || {};

  return image;
};
