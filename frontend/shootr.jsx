import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from 'store/store';
import Root from 'components/root';

import { requestAllImages, requestSingleImage, requestAllImagesForUser } from 'actions/image_actions';

import {updateUserProfile} from 'util/user_api_util';
import {postComment} from 'util/comment_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store = configureStore();

  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  ReactDOM.render(<Root store={store} />, root);

  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.requestAllImages = requestAllImages;
  window.requestSingleImage = requestSingleImage;
  window.requestAllImagesForUser = requestAllImagesForUser;
  window.updateUserProfile = updateUserProfile;
  window.postComment = postComment;
});
