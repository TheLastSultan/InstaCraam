import React from 'react';
import { withRouter } from 'react-router';
import Loading from '../loading/loading';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser.id,
      postId: this.props.post,
      body: "",
      username: this.props.currentUser.username,
      commentsByPost: this.props.commentsByPost,
      loading: true
    };

    this._handleSubmit = this._handleSubmit.bind(this);
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


  render() {
    const { commentsById, currentUser, allCommentIds, post } = this.props;
    // const { commentsById, commentsByPost, currentUser, allCommentIds, post } = this.props;
    const { commentsByPost } = this.state;

    let commentsHolder = (this.props.location.pathname === "/") ?
      allCommentIds : commentsByPost;

    let placeholder = (currentUser) ?
      "Add a comment..." :
      "Log in to like or comment.";


    if (this.state.loading) return <Loading />;

    return (
      <div className="comments-container">
        <section className="comments-display-container" >
          <ul>
            {
              commentsHolder.map( commentId => {
                if (commentsById[commentId].postId === post) {
                  return  (
                    <li key={commentId}>
                      <span className="username">
                        {commentsById[commentId].username}
                      </span>
                      <span className="comment">
                        {commentsById[commentId].body}
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
                <input
                  id="comment-body"
                  type="text"
                  placeholder={placeholder}
                  value={this.state.body}
                  onChange={this._update('body')} />
            </form>
        </section>

      </div>
    );
  }

}

export default withRouter(Comments);
