import { connect } from 'react-redux';
import Comments from './comments';
import { postComment, destroyComment } from '../../actions/comment_actions';
import { requestCommentsForPost } from '../../actions/comment_actions';
import { selectAllObjects } from '../../reducers/selectors';

const mapStateToProps = state => {
  return ({
    allCommentIds: state.comments.allIds,
    commentsById: state.comments.byId,
    commentsByPost: state.comments.byPost,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  requestCommentsForPost: post => dispatch(requestCommentsForPost(post)),
  postComment: comment => dispatch(postComment(comment)),
  destroyComment: comment => dispatch(destroyComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
