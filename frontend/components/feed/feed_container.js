import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestAllImages } from '../../actions/image_actions';
import { requestAllComments } from '../../actions/comment_actions';
import { selectAllImages, selectAllComments } from '../../reducers/selectors';
import shuffle from 'lodash/shuffle';

const mapStateToProps = ({ errors, images, session, comments }) => {
  const allImages = selectAllImages(images);
  return ({
    images: shuffle(allImages),
    currentUser: session.currentUser,
    comments: selectAllComments(comments),
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllImages: () => dispatch(requestAllImages()),
  requestAllComments: () => dispatch(requestAllComments())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
