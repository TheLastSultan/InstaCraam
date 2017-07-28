import { connect } from 'react-redux';
import Comments from './comments';
import { requestCommentsForPost } from '../../actions/comment_actions';
import { postComment, destroyComment } from '../../actions/comment_actions';
import { postLike, destroyLike } from '../../actions/image_actions';
import { selectAllObjects } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser.id;
  return ({
    allCommentIds: state.comments.allIds,
    commentsById: state.comments.byId,
    commentsByPost: state.comments.byPost,
    currentUser: state.session.currentUser,
    currentProfile: state.profile,
    likesCount: ownProps.post.likesCount,
    liked: ownProps.post.likedBy.includes(currentUserId)
  });
};

const mapDispatchToProps = dispatch => ({
  requestCommentsForPost: post => dispatch(requestCommentsForPost(post)),
  postComment: comment => dispatch(postComment(comment)),
  destroyComment: comment => dispatch(destroyComment(comment)),
  addLike: like => dispatch(postLike(like)),
  removeLike: like => dispatch(destroyLike(like)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
