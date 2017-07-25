import merge from 'lodash/merge';
import {
  RECEIVE_SINGLE_COMMENT,
  RECEIVE_COMMENTS_FOR_POST
} from 'actions/comment_actions';
import { selectIds } from './selectors';

const defaultState = () => ({
  byId: {},
  byPost: []
});

const CommentReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  let ids, nextState;

  switch (action.type) {

    case RECEIVE_SINGLE_COMMENT:
      const id = action.comment.id;
      const byPost = state.byPost.concat(action.comment.id);

      return merge({}, state, {
        byId: {
          [id]: action.comment
        },
        byPost: byPost
      });

    case RECEIVE_COMMENTS_FOR_POST:
      ids = selectIds(action.comments);
      nextState = Object.assign({}, state, { byPost: ids });

      return merge(nextState, {
        byId: action.comments
      });

    default:
      return state;
  }
};

export default CommentReducer;
