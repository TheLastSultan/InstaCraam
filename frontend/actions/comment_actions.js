import * as APIUtil from 'util/comment_api_util';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors } from './error_actions';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENTS_FOR_POST = 'RECEIVE_COMMENTS_FOR_POST';
export const RECEIVE_SINGLE_COMMENT = 'RECEIVE_SINGLE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';


export const receiveSingleComment = comment => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

export const receiveAllCommentsForPost = comments => ({
  type: RECEIVE_COMMENTS_FOR_POST,
  comments
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const requestCommentsForPost = post => dispatch => {
  return APIUtil.fetchCommentsForPost(post)
    .then( res => dispatch(receiveAllCommentsForPost(res)) );
};

export const requestAllComments = () => dispatch => {
  return APIUtil.fetchAllComments()
  .then( res => dispatch(receiveAllComments(res)) );
};


export const postComment = comment => dispatch => {
  return APIUtil.postComment(comment)
    .then( res => dispatch(receiveSingleComment(res)) );
};

export const destroyComment = comment => dispatch => {
  return APIUtil.destroyComment(comment)
  .then( res => dispatch(removeComment(res)) )
  .then( res => console.log(res) );
};
