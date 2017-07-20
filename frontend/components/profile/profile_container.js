import { connect } from 'react-redux';
import Profile from './profile';
import { requestAllImagesForUser } from '../../actions/image_actions';
import { selectAllImages } from '../../reducers/selectors';

const mapStateToProps = ({ errors, images, session }) => {
  const allImages = selectAllImages(images);
  return ({
    images: allImages,
    currentUser: session.currentUser,
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllImagesForUser: userId => dispatch(requestAllImagesForUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
