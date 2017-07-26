import React from 'react';
import FeedItem from './feed_item';
import Loading from '../loading/loading';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.props.requestAllImages()
    .then(
      () => (this.props.requestAllComments())
    )
    .then(
      () => (this.setState({ loading: false}))
    );
    // .then( () => {
    //   console.log(this.props.imageIds);
    //   this.props.imageIds.forEach( (el, i) => {
    //     console.log('whats happening?');
    //     this.props.requestCommentsForPost(el)
    //     .then(res => console.log(i));
    //   });
    // }).then(
    //     () => console.log('done')
    //   )
    //   // allIds now populated.
    //   // iterate and call comments on each post
    //   // when done.then()setstate=loaded
    // // })
  }

  render() {
    const { imageIds, images } = this.props;

    if (this.state.loading) return <Loading />;

    return (
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
  }

}

export default FeedIndex;
