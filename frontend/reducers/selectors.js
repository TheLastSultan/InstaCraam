import values from 'lodash/values';

export const selectAllImages = ({ images }) => (
  values(images.data)
);

export const selectSingleImage = ({ images }, id) => {
  const image = image.data[id] || {};

  return image;
};
