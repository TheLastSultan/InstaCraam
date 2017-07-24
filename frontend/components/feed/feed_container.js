import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestAllImages } from '../../actions/image_actions';
import { requestAllComments } from '../../actions/comment_actions';
import { selectAllObjects } from '../../reducers/selectors';
import shuffle from 'lodash/shuffle';

const mapStateToProps = ({ comments , images, errors, session   }) => {
  const shuffledImageIds = shuffle(images.allIds);
  return ({
    imageIds: shuffledImageIds,
    images: images.byId,
    comments,
    currentUser: session.currentUser,
    errors,
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),
  requestAllImages: () => dispatch(requestAllImages())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
