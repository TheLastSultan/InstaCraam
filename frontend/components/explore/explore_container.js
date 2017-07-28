import { connect } from 'react-redux';
import Explore from './explore';
import { requestAllImages } from '../../actions/image_actions';
import { selectAllObjects } from '../../reducers/selectors';

const mapStateToProps = ({ errors, images, session, profile }) => {
  return ({
    images: selectAllObjects(images.byId),
    currentUser: session.currentUser,
    errors,
    profile
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllImages: () => dispatch(requestAllImages())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
