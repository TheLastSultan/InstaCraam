import React from 'react';

import FeedItem from './feed_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllImages();
    this.props.requestAllComments();
  }

  componentWillUnmount() {
    this.setState({
      comments: {}
    });
  }

  render() {
    const { images, comments } = this.props;

    const notLoaded = (
      <div className="main-content-container">
        <div className="center-text">
          <h2 className="loading">Loading...</h2>
        </div>
      </div>
    );

    const loaded = (
      <div className="main-content-container">
        <div className="feed-container list">
          {
            images.map( (el) => {

              const postComments = comments.filter( (comment) => (
                comment.postId === el.id
              ));

              return (
                <FeedItem
                  key={el.id}
                  image={el}
                  postComments={postComments}
                />
              );
            })
          }
        </div>
      </div>
    );

    // return notLoaded;
    return (images.length > 0) ? loaded : notLoaded;
  }

}

export default FeedIndex;
