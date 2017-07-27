import { connect } from 'react-redux';
import Upload from './upload';
import { uploadPhoto } from '../../actions/upload_actions';

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  return ({
    // postById: state.images.byId,
    // postByProfile: state.images.byProfile,
    // currentProfile: state.profile,
    ownProps,
    currentUser: state.session.currentUser
    // errors: state.errors
  });
};

const mapDispatchToProps = dispatch => ({
  uploadPhoto: img => dispatch(uploadPhoto(img))
});

export const UploadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
