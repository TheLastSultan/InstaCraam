export const signup = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/user',
    dataType: JSON,
    data: {
      user: {
        username: user.username,
        password: user.password
      }
    }
  });
};

export const login = user => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    dataType: 'JSON',
    data: {
      user: {
        username: user.username,
        password: user.password
      }
    }
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session',
  });
};
