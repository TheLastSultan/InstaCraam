import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';
import GridContainer from '../grid/grid_container';
import {selectAllCommentIds} from 'reducers/selectors';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    const { location } = this.props;
    const userId = location.pathname.slice(6);
    this.props.requestProfileInfo(userId)
      .then( () => this.props.requestAllImagesForUser(userId))
      .then( () => this.setState({loading: false})
    );
  }

  componentWillReceiveProps(nextProps) {
    const oldId = this.props.location.pathname.slice(6),
          newId = nextProps.location.pathname.slice(6);
    if (oldId !== newId) {
      nextProps.requestAllImagesForUser(newId);
      nextProps.requestProfileInfo(newId);
    }
  }

  componentWillUnmount() {
  }

  toggleUserButtons() {
    const { currentUser, currentProfile } = this.props;

    if (currentUser) {

      let editButton = (
        <Link to={`/user/${currentUser.id}/edit`}>
          <button className="edit-profile profile-button">Edit Profile</button>
        </Link>
      );

      let followButton = (
        <button className="toggle-follow profile-button follow"></button>
      );

      return (currentUser.id === currentProfile.id) ? editButton : followButton;
    }

  }

  render() {
    const {
      postById,
      postByProfile,
      currentProfile,
      currentUser,
      comments,
      errors } = this.props;


    let noImages,
        gridContainer;

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

    if (this.state.loading) return <Loading />;

    return (
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
              { this.toggleUserButtons() }
            </div>
            <div className="stats">
              <strong>{this.props.postByProfile.length}&nbsp;</strong>
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
  }

}

export default Profile;
