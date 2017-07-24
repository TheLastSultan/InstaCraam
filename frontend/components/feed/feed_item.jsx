import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CommentsContainer from '../comment/comments_container';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { image } = this.props,
          avatarStyle = {backgroundImage: `url(${image.avatarUrl})`};
    return (
      <article className="feed-item-container">
        <header className="user-detail-container">
            <Link to={`/user/${image.userId}`}>
              <span
                className="avatar"
                title={image.username}
                style={avatarStyle}></span>
            </Link>
            <div className="user-box">
              <span className="username">
                <Link to={`/user/${image.userId}`}>
                  {image.username}
                </Link>
              </span>
              <span className="location">{image.location}</span>
            </div>
        </header>
        <figure className="item-image-container">
          <img src={image.imgUrl} />
        </figure>
        <section className="item-goodies">
          <div className="image-actions-container">
            <button className="icon icon-likes">like</button>
          </div>
          <div className="caption-container">
            <span className="username">
              <Link to={`/user/${image.userId}`}>
                {image.username}
              </Link>
            </span>
            <span className="caption">{image.caption}</span>
          </div>

          <CommentsContainer post={image} />

        </section>
      </article>
    );
  }
}

export default FeedItem;
