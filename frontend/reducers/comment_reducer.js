import merge from 'lodash/merge';
import {
  RECEIVE_ALL_COMMENTS,
  // RECEIVE_ALL_COMMENTS_FOR_POST
} from 'actions/comment_actions';
import { selectAllId } from './selectors';

const defaultState = () => ({
  byId: {},
  allIds: [],
  // byPost: {}
});

const CommentReducer = (state = defaultState(), action) => {
  Object.freeze(state);

  switch (action.type) {

    case RECEIVE_ALL_COMMENTS:
      return {
        byId: action.comments,
        allIds: selectAllId(action.comments)
        // byPost: {}
      };
      // return merge({}, state, {
      //   byId: action.comments,
      //   allIds: selectAllId(action.comments)
      // });

    // case RECEIVE_ALL_COMMENTS_FOR_POST:
      // return {
      //   byId: {},
      //   allIds: [],
      //   byPost: action.comments
      // };
      // return merge({}, defaultState, {
      //   byPost: action.comments
      // });

    default:
      return state;
  }
};

export default CommentReducer;
