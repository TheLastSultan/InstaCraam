import React from 'react';
import FeedItem from './feed_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllImages();
    // this.props.requestAllComments();
  }

  componentWillReceiveProps(nextProps) {
    const oldId = this.props.currentUser.id,
          newId = nextProps.currentUser.id;
    if (oldId !== newId) {
      nextProps.requestAllImages();
      nextProps.requestAllComments()
        .then(res => console.log('done'));
    }
  }

  componentWillUnmount() {
  }

  render() {
    const { imageIds, images } = this.props;
    const testStyle = {'position': 'relative', 'top': '-30px'};
    const notLoaded = (
      <div className="main-content-container">
        <div className="center-text" style={testStyle}>
          <h2 className="loading">Loading...</h2>
        </div>
      </div>
    );

    const loaded = (
      <div className="main-content-container">
        <div className="feed-container list">
          {
            imageIds.map( (id) => {
              return (
                <FeedItem
                  key={id}
                  image={images[id]}
                  />
              );
            })
          }
        </div>
      </div>
    );

    return (imageIds.length > 0) ? loaded : notLoaded;
  }

}

export default FeedIndex;
