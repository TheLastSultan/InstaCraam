import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { image } = this.props;


    console.log(image.avatarUrl);

    const avatar = ( <span className="avatar" style={{ backgroundImage: `url(${image.avatarUrl})` }}>hi</span> );

    return (
      <article className="feed-item-container">
        <header className="user-detail-container">
            { avatar }
            <div className="user-box">
              <span className="username">{ image.username }</span>
              <span className="location">{ image.location }</span>
            </div>
        </header>
        <figure className="item-image-container">
          <img src={ image.imgUrl} />
        </figure>
        <section className="item-goodies">
          <div className="image-actions-container">
            <button className="icon icon-likes">like</button>
          </div>
          <div className="caption-container">
            <span className="username">{image.username}</span>
            &nbsp;
            <span className="caption">{image.caption}</span>
          </div>
          <div className="comments-container">
            <ul>
              <li>
                <span className="username">bailey</span>
                &nbsp;
                <span className="comment">cool photo bro</span>
              </li>
              <li>
                <span className="username">bailey</span>
                &nbsp;
                <span className="comment">cool photo bro</span>
              </li>
              <li>
                <span className="username">bailey</span>
                &nbsp;
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
