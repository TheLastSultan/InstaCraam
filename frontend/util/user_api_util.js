export const fetchProfileInfo = id => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${id}`
  });
};

export const updateUserProfile = user => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user.id}`,
    data: {user}
  });
};
