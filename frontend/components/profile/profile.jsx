import React from 'react';
import { Link } from 'react-router-dom';
import Loading from '../loading/loading';
import autoBind from 'react-autobind';
import GridContainer from '../grid/grid_container';
import {selectAllCommentIds} from 'reducers/selectors';
import FollowingContainer from '../following/following_container';


class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      postCount: this.props.postByProfile.length,
      followingCount: this.props.followingCount
    };
    autoBind(this);
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
    const oldId = this.props.location.pathname.slice(6);
    const newId = nextProps.location.pathname.slice(6);

    if (oldId !== newId) {
      nextProps.requestAllImagesForUser(newId);
      nextProps.requestProfileInfo(newId);
    }

    if(this.props.postByProfile !== nextProps.postByProfile) {
      nextProps.requestProfileInfo(newId);
      this.setState({
        postCount: nextProps.postByProfile.length
      });
    }

  }

  toggleUserButtons() {
    const { currentUser, currentProfile } = this.props;

    if (currentUser) {
      let editButton = (
        <Link to={`/user/${currentUser.id}/edit`}>
          <button className="edit-profile profile-button">Edit Profile</button>
        </Link>
      );

      if (currentUser.id === currentProfile.id) {
        return editButton;
      } else {
        return <FollowingContainer />;
      }
    }
  }

  displayGrid() {
    const { postByProfile, postById, currentUser } = this.props;
    if (postByProfile.length === 0) {
      return (
        <div className="center-text container">
          <h2 className="shootr">You have no photos! Add some to your feed!</h2>
        </div>
      );
    } else {
      return (
        <div className="grid-container">
          {
            postByProfile.map( (postId) => {
              return (
                <GridContainer
                  image={postById[postId]}
                  currentUser={currentUser}
                  id={postId}
                  key={postId} />
              );
            })
          }
        </div>
      );
    }
  }

  tempCheckForStats() {
    const { currentUser, currentProfile } = this.props;
    if (currentUser.id === currentProfile.id) {
      return (
        <span>
          <strong>{this.state.followingCount}&nbsp;</strong>following
        </span>
      );
    }
  }

  render() {

    const { currentProfile } = this.props;

    if (this.state.loading) return <Loading loading={this.state.loading}/>;

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
              <strong>{this.state.postCount}&nbsp;</strong>
              posts &nbsp;&nbsp;&nbsp;
              {this.tempCheckForStats()}
            </div>
            <div className="description">
              <span className="fullname">{ currentProfile.fullname }</span>
              <span>{ currentProfile.description }</span>
            </div>
          </div>
        </section>
        {this.displayGrid()}
      </div>
    );
  }

}

export default Profile;
