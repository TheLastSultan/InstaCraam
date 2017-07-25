import merge from 'lodash/merge';
import {
  RECEIVE_ALL_COMMENTS,
  RECEIVE_SINGLE_COMMENT,
  RECEIVE_COMMENTS_FOR_POST,
  REMOVE_COMMENT
} from 'actions/comment_actions';
import { selectIds } from './selectors';

const defaultState = () => ({
  byId: {},
  byPost: [],
  allIds: []
});

const CommentReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  let ids, nextState;

  switch (action.type) {

    case RECEIVE_ALL_COMMENTS:
      ids = selectIds(action.comments);
      return merge({}, state, {
        byId: action.comments,
        allIds: ids
      });

    case RECEIVE_SINGLE_COMMENT:
      const id = action.comment.id;
      const byPost = state.byPost.concat(action.comment.id);
      const allIds = state.allIds.concat(action.comment.id);

      return merge({}, state, {
        byId: {
          [id]: action.comment
        },
        allIds: allIds,
        byPost: byPost
      });

    case RECEIVE_COMMENTS_FOR_POST:
      ids = selectIds(action.comments);
      nextState = Object.assign({}, state, { byPost: ids });

      return merge(nextState, {
        byId: action.comments
      });

    case REMOVE_COMMENT:
      nextState = merge({}, state);
      const idx = nextState.byPost.indexOf(action.comment.id);
      nextState.byPost.splice(idx,1);
      delete nextState.byId[action.comment.id];
      return nextState;

    default:
      return state;
  }
};

export default CommentReducer;
