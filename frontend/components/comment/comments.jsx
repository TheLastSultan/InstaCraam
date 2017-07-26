import React from 'react';
import { withRouter } from 'react-router';
import Loading from '../loading/loading';

class Comments extends React.Component {
  constructor(props) {
    super(props);

    if (this.props.currentUser) {
      this.state = {
        authorId: this.props.currentUser.id,
        postId: this.props.post,
        body: "",
        username: this.props.currentUser.username,
        commentsByPost: this.props.commentsByPost,
        loading: true
      };
    } else {
      this.state = {
        commentsByPost: this.props.commentsByPost,
        loading: true
      };
    }
    this._handleSubmit = this._handleSubmit.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }

  componentWillMount() {
    this.props.requestCommentsForPost(this.props.post)
      .then( () => this.setState({ loading: false }) );
  }

  componentWillUnMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.commentsByPost !== nextProps.commentsByPost) {
      this.setState({
        commentsByPost: nextProps.commentsByPost,
      });
    }
  }

  _update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const comment = this.state;
    this.props.postComment(comment);
    this.setState({
      body: ""
    });
  }

  toggleCommentInput() {
    let commentInput;

    if (this.props.currentUser) {
      return (
        <input
          id="comment-body"
          type="text"
          placeholder="Add a comment..."
          value={this.state.body}
          onChange={this._update('body')}
          />
      );
    } else {
      return (
        <input
          id="comment-body"
          type="text"
          placeholder="Log in to like or comment."
          disabled/>
      );
    }
  }

  deleteComment(e) {
    e.preventDefault();
    const commentId = e.currentTarget.getAttribute('data-comment-id');
    this.props.destroyComment(commentId);
  }

  deleteCommentToggle(authorId, currentUserId, commentId) {
    let deleteButton = (
      <button
        className="delete-comment"
        onClick={this.deleteComment}
        data-comment-id={commentId}></button>
    );
    return (authorId === currentUserId) ? deleteButton : null;
  }

  render() {
    const { commentsById, currentUser, allCommentIds, post } = this.props;
    const { commentsByPost } = this.state;

    let commentsHolder = (this.props.location.pathname === "/") ?
      allCommentIds : commentsByPost;

    if (this.state.loading) return <Loading />;

    return (
      <div className="comments-container">
        <section className="comments-display-container" >
          <ul>
            {
              commentsHolder.map( cid => {
                if ( commentsById[cid] && commentsById[cid].postId === post) {
                  return  (
                    <li key={cid}>
                      <span className="username">
                        {commentsById[cid].username}
                      </span>
                      <span className="comment">
                        {commentsById[cid].body}

                        { this.deleteCommentToggle(
                          commentsById[cid].authorId,
                          currentUser.id, cid) }
                          
                      </span>
                    </li>
                  );
                }
              })
            }
          </ul>
        </section>
        <section className="add-comments-container">
            <form
              className="comment-form"
              onSubmit={this._handleSubmit}>
              { this.toggleCommentInput() }
            </form>
        </section>

      </div>
    );
  }

}

export default withRouter(Comments);
