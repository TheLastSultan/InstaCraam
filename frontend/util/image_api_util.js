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


export const postLike = like => {
  return $.ajax({
    method: 'POST',
    url: '/api/likes',
    data: {
      like: {
        likable_type: like.likeType,
        likable_id: like.likableId,
        liker_id: like.likerId
      }
    }
  });
};

export const destroyLike = like => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/likes/1`,
    data: {
      like: {
        likable_type: like.likeType,
        likable_id: like.likableId,
        liker_id: like.likerId
      }
    }
  });
};
