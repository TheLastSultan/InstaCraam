import React from 'react';

import FeedItem from './feed_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllImages();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      nextProps.clearErrors();
    }
  }

  render() {
    const { posts, deletePost } = this.props;
    const notLoaded = (
      <div>
        <h1>Loading...</h1>
      </div>
    );
    const loaded = (
      <section>
        <h1>All Posts!</h1>
        <div className="post-index container">
          <PostsListings posts={ posts } deletePost={ deletePost } />
          <PostFormContainer />
        </div>
      </section>
    );

    return (posts.length > 0) ? loaded : notLoaded;
  }

}

export default PostsIndex;
