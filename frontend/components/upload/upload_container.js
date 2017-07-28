import { connect } from 'react-redux';
import Upload from './upload';
import { uploadPhoto } from '../../actions/upload_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    ownProps,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  uploadPhoto: img => dispatch(uploadPhoto(img))
});

export const UploadContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
