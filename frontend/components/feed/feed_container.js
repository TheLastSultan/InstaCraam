import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestAllImages } from '../../actions/image_actions';
import { requestAllComments,requestCommentsForPost } from '../../actions/comment_actions';
import { selectAllObjects } from '../../reducers/selectors';

const mapStateToProps = ({ images , comments, session, errors }) => {
// const mapStateToProps = (state) => {
  return ({
    imageIds: images.allIds,
    images: images.byId,
    currentUser: session.currentUser,
    comments,
    errors,
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
