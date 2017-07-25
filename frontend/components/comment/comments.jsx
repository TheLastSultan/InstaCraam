import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser.id,
      postId: this.props.post,
      body: "",
      username: this.props.currentUser.username,
    };

    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.requestCommentsForPost(this.props.post);
  }

  componentWillUnMount() {
  }

  componentWillReceiveProps(nextProps) {

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
    const { commentsById, commentsByPost, currentUser, post } = this.props;

    const notAuthorized = (
      <div className="comments-container">
        <section className="comments-display-container">
          <ul>
            {
              commentsByPost.map( commentId => {
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
              className="comment-form">
                <input
                  id="fullname"
                  type="text"
                  placeholder="Log in to like or comment."
                  />
            </form>
        </section>

      </div>
    );

    const loaded = (
      <div className="comments-container">
        <section className="comments-display-container" >
          <ul>
            {
              commentsByPost.map( commentId => {
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
                  placeholder="Add a comment..."
                  value={this.state.body}
                  onChange={this._update('body')} />
            </form>
        </section>

      </div>
    );

    // return (currentUser.id && commentsByPost.length > 0) ? loaded : notAuthorized;
    return (currentUser.id) ? loaded : notAuthorized;
    // return loaded;
  }

}

export default Comments;
