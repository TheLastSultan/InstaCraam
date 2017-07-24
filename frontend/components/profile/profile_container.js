import { connect } from 'react-redux';
import Profile from './profile';
import EditProfile from './edit_profile';
import { requestAllImagesForUser } from '../../actions/image_actions';
import { requestProfileInfo, updateUserProfile } from '../../actions/profile_actions';
import { selectAllObjects } from '../../reducers/selectors';

import { requestAllComments } from '../../actions/comment_actions';


const mapStateToProps = (state) => {
  return ({
    images: selectAllObjects(state.images.byUser),
    currentProfile: state.profile,
    currentUser: state.session.currentUser,
    comments: state.comments.byPost,
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllComments: () => dispatch(requestAllComments()),
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
