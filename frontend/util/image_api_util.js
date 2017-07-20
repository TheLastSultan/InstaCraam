export const fetchAllImages = () => {
  return $.ajax({
    action: 'GET',
    url: '/api/images'
  });
};

export const fetchSingleImage = id => {
  return $.ajax({
    action: 'GET',
    url: `/api/images/${id}`
  });
};

export const fetchAllImagesForUser = id => {
  return $.ajax({
    action: 'GET',
    url: `/api/user/${id}/images`
  });
};
