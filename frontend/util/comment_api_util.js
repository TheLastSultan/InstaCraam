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

export const postComment = comment => {
  console.log(comment);
  return $.ajax({
    method: 'POST',
    url: `/api/images/${comment.postId}/comments`,
    data: {
      comment: {
        body: comment.body,
        author_id: comment.authorId,
        post_id: comment.postId
      }
    }
  });
};
