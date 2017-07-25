import React from 'react';
import FeedItem from './feed_item';
import shuffle from 'lodash/shuffle';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentWillMount() {
    console.log(this.state.loaded);
    this.props.requestAllImages()
    .then(
      this.props.requestAllComments()
      .then( () => this.setState({ loaded: true})) );
  }

  componentWillReceiveProps(nextProps) {
    // const oldId = this.props.currentUser.id,
    //       newId = nextProps.currentUser.id;
    // if (oldId !== newId) {
    //   nextProps.requestAllImages();
    // }
  }

  componentWillUnmount() {
  }

  render() {
    console.log(this.state.loaded);
    console.log(this.props);
    const { imageIds, images } = this.props;

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

    return (this.state.loaded) ? loaded : notLoaded;
  }

}

export default FeedIndex;
