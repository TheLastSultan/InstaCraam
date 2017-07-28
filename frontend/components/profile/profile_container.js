import { connect } from 'react-redux';
import Profile from './profile';
import EditProfile from './edit_profile';
import { requestProfileInfo, updateUserProfile } from '../../actions/profile_actions';
import { selectAllObjects } from '../../reducers/selectors';
import { requestAllImagesForUser } from '../../actions/image_actions';
import { addFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = state => {
  return ({
    postById: state.images.byId,
    postByProfile: state.images.byProfile,
    currentProfile: state.profile,
    currentUser: state.session.currentUser,
    followingCount: state.session.currentUser.followings.length,
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllImagesForUser: userId => dispatch(requestAllImagesForUser(userId)),
  requestProfileInfo: userId => dispatch(requestProfileInfo(userId)),
  updateUserProfile: user => dispatch(updateUserProfile(user)),
  addFollow: follow => dispatch(addFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow))
});

export const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);

export const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditProfile);
