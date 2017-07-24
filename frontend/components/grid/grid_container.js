import { connect } from 'react-redux';
import GridItem from './grid_item';
import { deletePost,
        requestAllImagesForUser } from '../../actions/image_actions';
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = ({ errors, comments, profile }) => {
  return ({
    // comments: selectAllComments(comments),
    profile,
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  // requestAllCommentsForPost: postId => (
  //   dispatch(requestAllCommentsForPost(postId))
  // )
  requestAllImagesForUser: userId => dispatch(requestAllImagesForUser(userId)),
  deletePost: post => dispatch(deletePost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItem);
