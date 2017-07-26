import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestAllImages } from '../../actions/image_actions';
import { requestAllComments,requestCommentsForPost } from '../../actions/comment_actions';
import { selectAllObjects } from '../../reducers/selectors';

// const mapStateToProps = ({ comments , images, errors, session   }) => {
const mapStateToProps = (state) => {
  console.log(state);
  return ({
    state,
    imageIds: state.images.allIds,
    // imageIds: images.allIds,
    images: state.images.byId,
    // images: images.byId,
    comments: state.comments,
    // comments,
    currentUser: state.session.currentUser,
    // currentUser: session.currentUser,
    errors: state.errors
    // errors,
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),
  requestAllImages: () => dispatch(requestAllImages()),
  requestCommentsForPost: post => dispatch(requestCommentsForPost(post))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
