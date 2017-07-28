import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import autoBind from 'react-autobind';
import CommentsContainer from '../comment/comments_container';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    autoBind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  _deletePost() {
    this.props.deletePost(this.props.id);
    this.handleCloseModal();
  }

  toggleActionButton() {
    const { currentProfile, currentUser } = this.props;
    let deleteButton;
    let followButton;

    return (!currentUser || currentUser.id !== currentProfile.id) ? (
      <button className="toggle-follow profile-button follow"></button>
    ) : (
      <button
        onClick={this._deletePost}
        className="delete-post profile-button">Delete</button>
    );
  }

  render() {
    const { image, currentProfile } = this.props;
    return (
      <figure className="grid-item">
        <img src={image.url} onClick={this.handleOpenModal} />
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
              <img src={image.url} />
            </figure>
            <aside className="modal-details-box">

              <section className="media-details">
                <section className="user-profile">
                  <div className="avatar-box">
                    <figure className="avatar-container">
                      <img src={currentProfile.avatarUrl} className="profile-avatar" />
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
                  {this.toggleActionButton()}
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
              <CommentsContainer post={image} />
            </aside>
          </div>
        </ReactModal>
      </figure>
    );
  }
}

export default GridItem;

// <CommentsContainer postComments={comments} postId={image.id}/>
