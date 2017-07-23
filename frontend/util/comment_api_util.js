export const fetchAllComments = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/comments'
  });
};

export const fetchAllCommentsForPost = postId => {
  return $.ajax({
    method: 'GET',
    url: `/api/images/${postId}/comments`
  });
};
