import { connect } from 'react-redux';
import Profile from './profile';
import { requestAllImagesForUser } from '../../actions/image_actions';
import { requestProfileInfo } from '../../actions/profile_actions';
import { selectAllImages } from '../../reducers/selectors';

const mapStateToProps = ({ errors, images, session, profile }) => {
  const allImages = selectAllImages(images);
  return ({
    images: allImages,
    currentUser: session.currentUser,
    profile,
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestProfileInfo: userId => dispatch(requestProfileInfo(userId)),
  requestAllImagesForUser: userId => dispatch(requestAllImagesForUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
