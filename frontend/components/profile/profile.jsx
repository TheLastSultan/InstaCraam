import React from 'react';
import { Link } from 'react-router-dom';
// import GridItem from '../grid/grid_item';
import GridContainer from '../grid/grid_container';
import {selectAllCommentIds} from 'reducers/selectors';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const { location } = this.props;
    const userId = location.pathname.slice(-1);
    this.props.requestProfileInfo(userId);
    this.props.requestAllImagesForUser(userId);
  }



  componentWillReceiveProps(nextProps) {
    const oldId = this.props.location.pathname.slice(-1),
          newId = nextProps.location.pathname.slice(-1);
    if (oldId !== newId) {
      nextProps.requestAllImagesForUser(newId);
      nextProps.requestProfileInfo(newId);
    }
  }

  componentWillUnmount() {
    this.props.clearProfile();
  }

  render() {

    // console.log(this.props);
    // return <div></div>;

    const {
      postById,
      postByProfile,
      currentProfile,
      currentUser,
      comments,
      errors } = this.props;

    let editCurrentUser,
        followButton,
        noImages,
        gridContainer;

    if (currentUser.id === currentProfile.id) {
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

    if (postByProfile.length === 0) {
      noImages = (
        <div className="center-text container">
          <h2 className="shootr">You have no photos! Add some to your feed!</h2>
        </div>
      );
    } else {
      gridContainer = (
        <div className="grid-container">
          {
            postByProfile.map( (postId) => {
              return (
                <GridContainer
                  image={postById[postId]}
                  currentUser={currentUser}
                  id={postId}
                  key={postId}
                />
              );
            })
          }
        </div>
      );
    }

    const loaded = (
      <div className="main-content-container grid">
        <section className="user-profile container">
          <div className="avatar-box">
            <figure className="avatar-container">
              <img src={currentProfile.avatarUrl} className="profile-avatar" />
            </figure>
          </div>
          <div className="user-box">
            <div className="username-box">
              <span>{ currentProfile.username }</span>
              {editCurrentUser} {followButton}
            </div>
            <div className="stats">
              <strong>5 </strong>
              posts &nbsp;&nbsp;&nbsp;
              <strong>3 </strong>
              followers &nbsp;&nbsp;&nbsp;
              <strong>3 </strong>following
            </div>
            <div className="description">
              <span className="fullname">{ currentProfile.fullname }</span>
              <span>{ currentProfile.description }</span>
            </div>
          </div>
        </section>
        {noImages}
        {gridContainer}

      </div>
    );

    return (currentProfile.id) ? loaded : notLoaded;
    // return (profile.id) ? loaded : (<span></span>);
  }

}

export default Profile;
