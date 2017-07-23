import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
          <div className="comments-container">
            <ul>
              <li>
                <span className="username">bailey</span>
                <span className="comment">cool photo bro</span>
              </li>
            </ul>
          </div>
          <div className="add-comments-container">
            <input type="text" placeholder="Add a comment..." />
          </div>
        </section>
      </article>
    );
  }
}

export default FeedItem;
