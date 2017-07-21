import { connect } from 'react-redux';
import Explore from './explore';
import { requestAllImages } from '../../actions/image_actions';
import { selectAllImages } from '../../reducers/selectors';
import shuffle from 'lodash/shuffle';

const mapStateToProps = ({ errors, images, session }) => {
  const allImages = selectAllImages(images);
  return ({
    images: shuffle(allImages),
    currentUser: session.currentUser,
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllImages: () => dispatch(requestAllImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
