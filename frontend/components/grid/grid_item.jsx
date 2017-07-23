import React from 'react';
import ReactModal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import Comments from '../comment/comments';

import requestAllCommentsForPost from '../../actions/comment_actions';

class GridItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentWillMount() {
    const { id } = this.props;
    this.props.requestAllCommentsForPost(id);
  }

  componentWillReceiveProps(nextProps) {
    // const oldId = this.props.id,
    //       newId = nextProps.id;
    //       console.log(oldId);
    //       console.log(newId);
    // if (oldId !== newId) {
    //   nextProps.requestAllCommentsForPost(newId);
    // }
    // const { id } = this.props;
    // this.props.requestAllCommentsForPost(id);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  render() {

    const { image, profile, currentUser, comments } = this.props;

    let editCurrentUser, followButton;

    if (currentUser.id !== profile.id) {
      followButton = (
        <button className="toggle-follow profile-button follow"></button>
      );
    } else {
      editCurrentUser = (
        <Link to={`/user/${currentUser.id}/edit`}>
          <button className="edit-profile profile-button">Edit Profile</button>
        </Link>
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
                  {editCurrentUser}
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

              <Comments postComments={comments} postId={image.id}/>

            </aside>

          </div>
        </ReactModal>
      </figure>
    );
  }
}

export default GridItem;
