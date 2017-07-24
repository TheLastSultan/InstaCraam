import * as APIUtil from 'util/comment_api_util';

import {
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  receiveErrors,
  clearErrors } from './error_actions';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
// export const RECEIVE_ALL_COMMENTS_FOR_POST = 'RECEIVE_ALL_COMMENTS_FOR_POST';


export const receiveAllComments = comments => ({
  type: RECEIVE_ALL_COMMENTS,
  comments
});

// export const receiveAllCommentsForPost = comments => ({
//   type: RECEIVE_ALL_COMMENTS_FOR_POST,
//   comments
// });

//
// export const requestAllCommentsForPost = post => dispatch => {
//   return APIUtil.fetchAllCommentsForPost(post)
//     .then( res => dispatch(receiveAllCommentsForPost(res)) );
// };



export const requestAllComments = () => dispatch => {
  return APIUtil.fetchAllComments()
  .then( res => dispatch(receiveAllComments(res)) );
};


export const postComment = comment => dispatch => {
  return APIUtil.postComment(comment);
    // .then( res => dispatch(receiveAllComments(res)) );
};
