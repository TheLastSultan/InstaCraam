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
