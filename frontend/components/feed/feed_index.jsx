import React from 'react';

import FeedItem from './feed_item';

class FeedIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.requestAllImages();
  }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.match.params.id !== nextProps.match.params.id) {
  //     nextProps.clearErrors();
  //   }
  // }

  render() {
    console.log(this.props);
    const { images } = this.props;

    const notLoaded = (
      <div className="main-content-container">
        <h1>Loading...</h1>
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

    // return notLoaded;
    return (images.length > 0) ? loaded : notLoaded;
  }

}

export default FeedIndex;








// <article className="feed-item-container">
//   <header className="user-detail-container">
//     avatar <span className="username">norris</span>
// </header>
// <figure className="item-image-container">
//   <img src="http://unsplash.it/600/500" />
// </figure>
// <section className="item-goodies">
//   <div className="image-actions-container">
//     like : comment : message
//   </div>
//   <div className="comments-container">
//     <ul>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//     </ul>
//   </div>
//   <div className="add-comments-container">
//     <input type="text" placeholder="Add a comment..." />
//   </div>
// </section>
// </article>
//
// <article className="feed-item-container">
//   <header className="user-detail-container">
//     avatar <span className="username">bailey</span>
// </header>
// <figure className="item-image-container">
//   <img src="http://unsplash.it/600/600" />
// </figure>
// <section className="item-goodies">
//   <div className="image-actions-container">
//     like : comment : message
//   </div>
//   <div className="comments-container">
//     <ul>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//     </ul>
//   </div>
//   <div className="add-comments-container">
//     <input type="text" placeholder="Add a comment..." />
//   </div>
// </section>
// </article>
//
// <article className="feed-item-container">
//   <header className="user-detail-container">
//     avatar <span className="username">batman</span>
// </header>
// <figure className="item-image-container">
//   <img src="http://unsplash.it/600/750" />
// </figure>
// <section className="item-goodies">
//   <div className="image-actions-container">
//     <button className="icon icon-likes">like</button>
//   </div>
//   <div className="comments-container">
//     <ul>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//       <li>
//         <span className="username">bailey</span>
//         &nbsp;
//         <span className="comment">cool photo bro</span>
//       </li>
//     </ul>
//   </div>
//   <div className="add-comments-container">
//     <input type="text" placeholder="Add a comment..." />
//   </div>
// </section>
// </article>
