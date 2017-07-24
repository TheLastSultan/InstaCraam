import { connect } from 'react-redux';
import Comments from './comments';
import { postComment } from '../../actions/comment_actions';
// import { requestAllComments } from '../../actions/comment_actions';
import { requestAllComments } from '../../actions/comment_actions';
import { selectAllObjects } from '../../reducers/selectors';

const mapStateToProps = ({ comments, session }) => {
  return ({
    comments: selectAllObjects(comments.byId),
    currentUser: session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  // requestCommentsForPost: post => dispatch(requestCommentsForPost(post)),
  // requestAllComments: () => dispatch(requestAllComments()),
  postComment: comment => dispatch(postComment(comment))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
