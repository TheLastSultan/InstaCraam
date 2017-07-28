import React from 'react';
import FeedItem from './feed_item';
import Loading from '../loading/loading';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIds: this.props.imageIds,
      loading: true
    };
  }

  componentWillMount() {
    this.props.requestAllImages()
    .then( () => (this.props.requestAllComments()))
    .then( () => (this.setState({ loading: false})));
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.imageIds !== nextProps.imageIds) {
      this.setState({
        imageIds: nextProps.imageIds
      });
    }
  }

  render() {
    const { images } = this.props;
    const arrayIds = this.state.imageIds;
    if (this.state.loading) return <Loading />;
    return (
      <div className="main-content-container">
        <div className="feed-container list">
          {arrayIds.map( (id) => <FeedItem key={id} image={images[id]} />)}
        </div>
      </div>
    );
  }
}

export default FeedIndex;
