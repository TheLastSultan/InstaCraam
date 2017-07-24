import { connect } from 'react-redux';
import GridItem from './grid_item';

import { requestAllCommentsForPost } from '../../actions/comment_actions';
import { selectAllComments } from '../../reducers/selectors';


const mapStateToProps = ({ errors, comments, profile }) => {
  return ({
    // comments: selectAllComments(comments),
    profile,
    errors
  });
};

const mapDispatchToProps = dispatch => ({
  // requestAllCommentsForPost: postId => (
  //   dispatch(requestAllCommentsForPost(postId))
  // )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItem);
