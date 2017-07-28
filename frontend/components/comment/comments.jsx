import React from 'react';
import { withRouter } from 'react-router';
import autoBind from 'react-autobind';
import Loading from '../loading/loading';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.currentUser) {
      this.state = {
        authorId: this.props.currentUser.id,
        postId: this.props.post.id,
        body: "",
        username: this.props.currentUser.username,
        commentsByPost: this.props.commentsByPost,
        loading: true,
        like: {
          likeType: 'Image',
          likableId: this.props.post.id,
          likerId: this.props.currentUser.id
        },
        liked: this.props.liked
      };
    } else {
      this.state = {
        commentsByPost: this.props.commentsByPost,
        loading: true
      };
    }
    autoBind(this);
  }

  componentWillMount() {
    const { requestCommentsForPost, post } = this.props;
    requestCommentsForPost(post)
      .then( () => this.setState({ loading: false }));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.commentsByPost !== nextProps.commentsByPost) {
      this.setState({ commentsByPost: nextProps.commentsByPost });

    }
    if (this.props.likesCount !== nextProps.likesCount) {
      this.setState({
        liked: nextProps.liked
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
    this.setState({ body: "" });
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
          onChange={this._update('body')} />
      );
    } else {
      return (
        <input
          id="comment-body"
          type="text"
          placeholder="Log in to like or comment."
          disabled />
      );
    }
  }

  destroyComment(e) {
    e.preventDefault();
    const commentId = e.currentTarget.getAttribute('data-comment-id');
    this.props.destroyComment(commentId);
  }

  deleteComment(authorId, currentUserId, commentId) {
    let deleteButton = (
      <button
        className="delete-comment"
        onClick={this.destroyComment}
        data-comment-id={commentId}></button>
    );
    return (authorId === currentUserId) ? deleteButton : null;
  }

  displayComments() {
    const { commentsById, currentUser, allCommentIds, location } = this.props;
    const { commentsByPost, postId } = this.state;
    let comments = (location.pathname === "/") ? allCommentIds : commentsByPost;

    return (
      <ul>
        {comments.map( cid => {
          let comment = commentsById[cid];

          if ( comment && comment.postId === postId) {
            return (
              <li key={cid}>
                <span className="username">{comment.username}</span>
                <span className="comment">
                  {comment.body}
                  {this.deleteComment( comment.authorId, currentUser.id, cid)}
                </span>
              </li>
            );
          }
        })}
      </ul>
    );
  }

  plusLike(e) {
    e.preventDefault();
    const like = this.state.like;
    this.props.addLike(like);
  }

  minusLike(e) {
    e.preventDefault();
    const like = this.state.like;
    this.props.removeLike(like);
  }

  likeButton() {

    const likeClass = (this.state.liked) ? 'no-like' : 'like';

    const addLikeButton = (
      <button
        className={`icon icon-likes ${likeClass}`}
        onClick={this.plusLike}
        >Like</button>
    );
    const removeLikeButton = (
      <button
        className={`icon icon-likes ${likeClass}`}
        onClick={this.minusLike}
        >Unlike</button>
    );
    return (this.state.liked) ? removeLikeButton : addLikeButton;
  }

  render() {
    if (this.state.loading) return <span></span>;

    return (
      <section className="comments-container">
        <div className="comments-display-container" >
          {this.displayComments()}
        </div>
        <div>
          <div className="post-actions-container">
            {this.likeButton()}
            <span>{this.props.post.likesCount}</span>
          </div>
        </div>
        <div className="add-comments-container">
            <form className="comment-form" onSubmit={this._handleSubmit}>
              { this.toggleCommentInput() }
            </form>
        </div>
      </section>
    );
  }

}

export default withRouter(Comments);
