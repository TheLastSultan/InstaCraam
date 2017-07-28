import { connect } from 'react-redux';
import FollowButton from './follow_button';
import { addFollow, deleteFollow } from '../../actions/follow_actions';

const mapStateToProps = (state, ownProps) => {
  const currentUserFollowings = state.session.currentUser.followings;
  const currentProfileId = state.profile.id;
  let following = (currentUserFollowings.indexOf(currentProfileId) === -1) ?
    false : following = true;
  return ({
    currentProfile: state.profile,
    currentUser: state.session.currentUser,
    errors: state.errors,
    following: following
  });
};

const mapDispatchToProps = dispatch => ({
  addFollow: follow => dispatch(addFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowButton);
