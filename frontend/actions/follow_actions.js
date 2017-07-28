import * as APIUtil from 'util/follow_api_util';

export const RECEIVE_FOLLOW = 'RECEIVE_FOLLOW';
export const REMOVE_FOLLOW = 'REMOVE_FOLLOW';

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const addFollow = follow => dispatch => {
  return APIUtil.postFollow(follow)
    .then( res => dispatch(receiveFollow(res)) );
};

export const deleteFollow = follow => dispatch => {
  return APIUtil.destroyFollow(follow)
    .then( res => dispatch(removeFollow(res)) );
};
