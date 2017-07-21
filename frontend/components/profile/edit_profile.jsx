import React from 'react';

class EditProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // const { location } = this.props;
    // const userId = location.pathname.slice(-1);
    // this.props.requestAllImagesForUser(userId);
    // this.props.requestProfileInfo(userId);
  }

  componentWillReceiveProps(nextProps) {
    // const oldId = this.props.location.pathname.slice(-1),
    //       newId = nextProps.location.pathname.slice(-1);
    // if (oldId !== newId) {
    //   nextProps.requestAllImagesForUser(newId);
    // }
  }

  render() {
    const { currentUser } = this.props;

    const notLoaded = (
      <div className="main-content-container">
        <div className="feed-container">
          <h2 className="loading">Edit Loading...</h2>
        </div>
      </div>
    );

    const loaded = (
      <div className="main-content-container">
        <section className="edit-profile-container">
          <ul className="edit-options">
            <li><a className="active">Edit Profile</a></li>
            <li><a>Delete Photos</a></li>
            <li><a>About Creator</a></li>
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
                  <span>{currentUser.username}</span>
                </div>
              </div>
            </section>
            <form className="formatted-form">

              <div className="form-row">
                <aside>
                  <label htmlFor="name">Name</label>
                </aside>
                <div>
                  <input id="name" type="text" />
                </div>
              </div>

              <div className="form-row">
                <aside>
                  <label htmlFor="name">Name</label>
                </aside>
                <div>
                  <input id="name" type="text" />
                </div>
              </div>

              <div className="form-row">
                <aside>
                  <label htmlFor="name">Name</label>
                </aside>
                <div>
                  <input id="name" type="text" />
                </div>
              </div>

              <div className="form-row">
                <aside>
                  <label htmlFor="name">Name</label>
                </aside>
                <div>
                  <input id="name" type="text" />
                </div>
              </div>

              <div className="form-row">
                <aside>
                  <label htmlFor="name">Name</label>
                </aside>
                <div>
                  <input id="name" type="text" />
                </div>
              </div>

            </form>
          </article>
        </section>
      </div>
    );

    return loaded;
    // return (images.length > 0) ? loaded : notLoaded;
  }

}

export default EditProfile;
