import React from 'react';
import { Link } from 'react-router-dom';
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
      nextProps.requestProfileInfo(newId);
    }
  }

  render() {
    const { images, profile, currentUser } = this.props;

    let editCurrentUser, followButton, noImages, gridContainer;

    if (currentUser.id === profile.id) {
      editCurrentUser = (
        <Link to={`/user/${currentUser.id}/edit`}>
          <button className="edit-profile profile-button">Edit Profile</button>
        </Link>
      );
    } else {
        followButton = (
        <button className="toggle-follow profile-button follow"></button>
      );
    }

    const notLoaded = (
      <div className="main-content-container">
        <div className="center-text">
          <h2 className="loading">Loading...</h2>
        </div>
      </div>
    );

    if (images.length === 0) {
      noImages = (
        <div className="center-text container">
          <h2 className="shootr">You have no photos! Add some to your feed!</h2>
        </div>
      );
    } else {
      gridContainer = (
        <div className="grid-container">
          {
            images.map( (el, i) => (
              <GridItem
                key={i}
                image={el} />
            ))
          }
        </div>
      );
    }

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
              {editCurrentUser} {followButton}
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
        {noImages}
        {gridContainer}

      </div>
    );

    return (profile.id) ? loaded : notLoaded;
    // return (profile.id) ? loaded : (<span></span>);
  }

}

export default Profile;
