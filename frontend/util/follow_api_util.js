export const postFollow = followedId => {
  followedId = parseInt(followedId);
  return $.ajax({
    method: 'POST',
    url: '/api/follows',
    data: {
      follow: {
        followed_id: followedId
      }
    }
  });
};

export const destroyFollow = followedId => {
  followedId = parseInt(followedId);
  return $.ajax({
    method: 'DELETE',
    url: `/api/follows/${followedId}`,
    data: {
      follow: {
        followed_id: followedId
      }
    }
  });
};
