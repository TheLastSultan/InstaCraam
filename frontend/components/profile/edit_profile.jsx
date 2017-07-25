import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.currentUser.id,
      fullname: this.props.currentUser.fullname,
      username: this.props.currentUser.username,
      description: this.props.currentUser.description
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  componentWillMount() {
    const { currentUser, location } = this.props;
    const profileId = location.pathname.slice(6, -5);

    if (currentUser.id === profileId) {
      this.props.requestProfileInfo(currentUser.id);
    }
  }

  componentWillUnMount() {
    this.props.images.data = [];
    this.props.profile = {};
  }

  componentWillReceiveProps(nextProps) {
    const oldId = this.props.currentUser.id,
          newId = nextProps.currentUser.id;
    if (oldId !== newId) {
      newId.props.requestProfileInfo(oldId);
    }
  }

  _update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.updateUserProfile(user);
  }

  render() {
    const { currentUser, profile } = this.props;

    const notAuthorized = (
      <div className="main-content-container">
        <div className="center-text">
          <h2 className="loading">You're not authorized to edit this profile.</h2>
        </div>
      </div>
    );

    const loaded = (
      <div className="main-content-container">
        <section className="edit-profile-container">
          <ul className="edit-options">
            <li><a className="active">Edit Profile</a></li>
          </ul>
          <article className="edit-main">
            <section className="user-profile container">
              <div className="avatar-box">
                <figure className="avatar-container">
                  <img src={currentUser.avatarUrl} className="profile-avatar" />
                </figure>
              </div>
              <div className="user-box">
                <div className="username-box">
                  <span>{ currentUser.username }</span>
                </div>
                <div className="stats">
                  <strong>5 </strong>posts &nbsp;&nbsp;&nbsp; <strong>3 </strong>followers &nbsp;&nbsp;&nbsp; <strong>3 </strong>following
                </div>
                <div className="description">
                  <span className="fullname">{ currentUser.fullname }</span>
                  <span>{ currentUser.description }</span>
                </div>
              </div>
            </section>
            <form className="formatted-form">

              <div className="form-row">
                <aside>
                  <label htmlFor="name">Name</label>
                </aside>
                <div>
                  <input
                    id="fullname"
                    type="text"
                    value={this.state.fullname}
                    onChange={this._update('fullname')} />
                </div>
              </div>

              <div className="form-row">
                <aside>
                  <label htmlFor="name">Username</label>
                </aside>
                <div>
                  <input
                    id="username"
                    type="text"
                    onChange={this._update('username')}
                    value={this.state.username} />
                </div>
              </div>

              <div className="form-row">
                <aside>
                  <label htmlFor="bio">Bio</label>
                </aside>
                <div>
                  <textarea
                    id="description"
                    onChange={this._update('description')}
                    defaultValue={this.state.description} >
                  </textarea>
                </div>
              </div>

              <div className="form-row">
                <button
                  id="update"
                  onClick={ this._handleSubmit }>Update
                </button>
              </div>

            </form>
          </article>
        </section>
      </div>
    );

    const paramUserId = parseInt(this.props.location.pathname.slice(6, -5));

    return (currentUser.id === paramUserId) ? loaded : notAuthorized;
  }

}

export default EditProfile;
//
// <div className="form-row">
//   <aside>
//     <label htmlFor="name">Password</label>
//   </aside>
//   <div>
//     <input id="name" type="text" />
//   </div>
// </div>
