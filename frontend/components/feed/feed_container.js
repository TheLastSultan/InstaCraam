import { connect } from 'react-redux';
import FeedIndex from './feed_index';
import { requestAllImages, deletePost } from '../../actions/image_actions';
import { selectAllImages } from '../../reducers/selectors';

const mapStateToProps = (state, { errors }) => {
  console.log(state);
  return ({
    // images: selectAllImages(state)
  });
};

const mapDispatchToProps = dispatch => ({
  // requestAllImages: () => dispatch(requestAllImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedIndex);
