import React from 'react';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authorId: this.props.currentUser.id,
      postId: this.props.post.id,
      body: ""
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
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
  }

  render() {

    const { currentUser, comments, post } = this.props;

    const notAuthorized = (
      <div className="comments-container">
        <section className="comments-display-container">
          <ul>
            {
              comments.map( comment => {
                if (comment.postId === post.id) {
                  return  (
                    <li key={comment.id}>
                      <span className="username">{comment.username}</span>
                      <span className="comment">{comment.body}</span>
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
        <section className="comments-display-container">
          <ul>
            {
              comments.map( comment => {
                if (comment.postId === post.id) {
                  return  (
                    <li key={comment.id}>
                      <span className="username">{comment.username}</span>
                      <span className="comment">{comment.body}</span>
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

    return (currentUser.id) ? loaded : notAuthorized;
    // return (<div></div>);
  }

}

export default Comments;
