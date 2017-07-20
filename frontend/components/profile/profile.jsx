import React from 'react';

import GridItem from '../grid/grid_item';

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { location } = this.props;
    const userId = location.pathname.slice(-1);
    this.props.requestAllImagesForUser(userId);
    this.props.requestProfileInfo(userId);
  }

  componentWillReceiveProps(nextProps) {
    const oldId = this.props.location.pathname.slice(-1),
          newId = nextProps.location.pathname.slice(-1);
    if (oldId !== newId) {
      nextProps.requestAllImagesForUser(newId);
    }
  }

  render() {
    const { images, profile } = this.props;

    const notLoaded = (
      <div className="main-content-container">
        <div className="feed-container">
          <h2 className="loading">Loading...</h2>
        </div>
      </div>
    );

    const loaded = (
      <div className="main-content-container grid">
        <section className="user-profile container">
          <div className="avatar-box">
            <figure className="avatar-container">
              <img src={profile.avatarUrl} className="profile-avatar" />
            </figure>
          </div>
          <div className="user-box">
            <div className="username-box">
              <span>{ profile.username }</span>
              <button id="edit-profile">Edit Profile</button>
            </div>
            <div className="stats">
              <strong>5 </strong>posts &nbsp;&nbsp;&nbsp; <strong>3 </strong>followers &nbsp;&nbsp;&nbsp; <strong>3 </strong>following
            </div>
            <div className="description">
              <span className="fullname">{ profile.fullname }</span>
              <span>{ profile.description }</span>
            </div>
          </div>
        </section>
        <div className="grid-container">
          {
            images.map( (el, i) => (
              <GridItem
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

export default Profile;








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
