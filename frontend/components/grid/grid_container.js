import { connect } from 'react-redux';
import GridItem from './grid_item';
import { deletePost,
        requestAllImagesForUser } from '../../actions/image_actions';
import { selectAllComments } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    currentUser: state.session.currentUser,
    currentProfile: state.profile,
    errors: state.errors
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllImagesForUser: userId => dispatch(requestAllImagesForUser(userId)),
  deletePost: post => dispatch(deletePost(post)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItem);
