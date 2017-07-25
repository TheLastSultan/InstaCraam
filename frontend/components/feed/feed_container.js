import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestAllImages } from '../../actions/image_actions';
import { requestAllComments } from '../../actions/comment_actions';
import { selectAllObjects } from '../../reducers/selectors';

const mapStateToProps = ({ comments , images, errors, session   }) => {
  return ({
    imageIds: images.allIds,
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
