import React from 'react';

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    const { image } = this.props;

    return (
      <article className="feed-item-container">
        <header className="user-detail-container">
            <span className="username">{ image.userId }</span>
            <span className="location">{ image.location }</span>
        </header>
        <figure className="item-image-container">
          <img src={ image.imgUrl} />
        </figure>
        <section className="item-goodies">
          <div className="image-actions-container">
            like : comment : message
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
