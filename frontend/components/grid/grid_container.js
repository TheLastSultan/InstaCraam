import { connect } from 'react-redux';
import GridItem from './grid_item';
import { deletePost,
        requestAllImagesForUser } from '../../actions/image_actions';
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = (state) => {
// const mapStateToProps = ({ errors, comments, profile }) => {
  return ({
    // profile,
    // errors
    currentUser: state.session.currentUser,
    currentProfile: state.profile,
    errors: state.errors
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
