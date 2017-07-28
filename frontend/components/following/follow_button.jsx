import React from 'react';
import autoBind from 'react-autobind';

class FollowButton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      following: this.props.following,
      currentProfileId: this.props.currentProfile.id
    };
    autoBind(this);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.following !== newProps.following) {
      this.setState({
        following: newProps.following
      });
    }
  }

  handleFollow(e) {
    e.preventDefault();
    const currentProfileId = this.state.currentProfileId;
    if (!this.state.following) {
      this.props.addFollow(currentProfileId)
        .then(() => this.setState({ following: true})
      );
    } else {
      this.props.deleteFollow(currentProfileId)
        .then(() => this.setState({ following: false})
      );
    }
  }

  render() {
    const following = (this.state.following) ? 'following' : '';
    return (
      <button
        className={`profile-button follow-button ${following}`}
        onClick={this.handleFollow}>
      </button>
    );
  }
}

export default FollowButton;
