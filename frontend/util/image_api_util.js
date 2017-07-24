export const fetchAllImages = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/images'
  });
};

export const fetchSingleImage = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/images/${id}`
  });
};

export const fetchAllImagesForUser = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}/images`
  });
};

export const destroyPost = postId => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/images/${postId}`
  });
};
