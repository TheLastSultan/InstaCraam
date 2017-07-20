export const fetchProfileInfo = id => {
  return $.ajax({
    action: 'GET',
    url: `/api/users/${id}`
  });
};
