import React from 'react';
import ReactModal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {

    const { image, profile, currentUser } = this.props,
          avatarStyle = {backgroundImage: `url(${image.avatarUrl})`};

          console.log(this.props);

    let editCurrentUser, followButton;

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

    return (
      <figure className="grid-item">
        <img src={image.imgUrl} onClick={this.handleOpenModal} />
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Image Modal"
          className={{
            base: 'modal',
            afterOpen: 'modal_after-open',
            beforeClose: 'modal_before-close'
          }}
          overlayClassName={{
            base: 'modal-overlay',
            afterOpen: 'modal-overlay_after-open',
            beforeClose: 'modal-overlay_before-close'
          }}
          onRequestClose={this.handleCloseModal}
          shouldCloseOnOverlayClick={true}>
          <button onClick={this.handleCloseModal} className="close-modal">Close</button>

          <div className="modal-content-container">
            <figure className="modal-media-box">
              <img src={image.imgUrl} />
            </figure>
            <aside className="modal-details-box">

              <section className="media-details">
                <section className="user-profile">
                  <div className="avatar-box">
                    <figure className="avatar-container">
                      <img src={profile.avatarUrl} className="profile-avatar" />
                    </figure>
                  </div>
                  <div className="user-box">
                    <span className="username">
                      <Link to={`/user/${image.userId}`}>
                        {image.username}
                      </Link>
                    </span>
                    <span className="location">
                      {image.location}</span>
                  </div>
                  {followButton}
                </section>
              </section>

              <section className="media-comments">
                <div className="caption-container">
                  <span className="username">
                    <Link to={`/user/${image.userId}`}>
                      {image.username}
                    </Link>
                  </span>
                  <span className="caption">{image.caption}</span>
                </div>
              </section>
            </aside>

          </div>
        </ReactModal>
      </figure>
    );
  }
}

export default GridItem;


// <article className="grid-item">
//   <figure className="item-image-container">
//     <img src={image.imgUrl} />
//   </figure>
// </article>
