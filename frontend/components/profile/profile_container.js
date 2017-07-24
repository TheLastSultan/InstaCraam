import { connect } from 'react-redux';
import Profile from './profile';
import EditProfile from './edit_profile';
import {
  requestProfileInfo,
  updateUserProfile,
  clearProfile } from '../../actions/profile_actions';
import { selectAllObjects } from '../../reducers/selectors';
import { requestAllImagesForUser } from '../../actions/image_actions';
import { requestAllComments } from '../../actions/comment_actions';



const mapStateToProps = (state) => {
  return ({
    postById: state.images.byId,
    postByProfile: state.images.byProfile,
    currentProfile: state.profile,
    currentUser: state.session.currentUser,
    comments: state.comments.byPost,
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),

  clearProfile: () => dispatch(clearProfile()),

  requestAllImagesForUser: userId => dispatch(requestAllImagesForUser(userId)),
  requestProfileInfo: userId => dispatch(requestProfileInfo(userId)),
  updateUserProfile: user => dispatch(updateUserProfile(user))
});

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
