import * as APIUtil from 'util/comment_api_util';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors } from './error_actions';

export const RECEIVE_ALL_COMMENTS_FOR_POST = 'RECEIVE_ALL_COMMENTS_FOR_POST';
export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';

export const receiveAllCommentsForPost = comments => ({
  type: RECEIVE_ALL_COMMENTS_FOR_POST,
  comments
});

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const requestAllCommentsForPost = postId => dispatch => {
  return APIUtil.fetchAllCommentsForPost(postId)
    .then( res => dispatch(receiveAllCommentsForPost(res)) );
};

export const requestAllComments = () => dispatch => {
  return APIUtil.fetchAllComments()
    .then( res => dispatch(receiveAllComments(res)) );
};
