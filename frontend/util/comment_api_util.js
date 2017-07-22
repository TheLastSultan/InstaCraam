export const fetchAllImages = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/images'
  });
};

export const fetchAllCommentsForPost = post => {
  return $.ajax({
    method: 'GET',
    url: `/api/images/${post.id}/comments`
  });
};
