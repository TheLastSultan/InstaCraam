import React from 'react';

import FeedItem from './feed_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllImages();
  }

  render() {
    const { images } = this.props;

    const notLoaded = (
      <div className="main-content-container">
        <div className="feed-container">
          <h2 className="loading">Loading...</h2>
        </div>
      </div>
    );

    const loaded = (
      <div className="main-content-container">
        <div className="feed-container">
          {
            images.map( (el, i) => (
              <FeedItem
                key={i}
                image={el} />
            ))
          }
        </div>
      </div>
    );

    return (images.length > 0) ? loaded : notLoaded;
  }

}

export default FeedIndex;
