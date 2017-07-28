import React from 'react';
import ReactModal from 'react-modal';
import { Link } from 'react-router-dom';
import autoBind from 'react-autobind';

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: null,
      imageFile: null,
      userId: parseInt(this.props.currentUser.id),
      caption: "",
      location: ""
    };

    autoBind(this);
  }

  _update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  _updateFile(e) {
    e.preventDefault();
    const file = e.currentTarget.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        imageUrl: reader.result,
        imageFile: file
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({
        imageUrl: "",
        imageFile: null
      });
    }
  }

  _handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image[img_url]", this.state.imageUrl);
    formData.append("image[user_id]", this.state.userId);
    formData.append("image[caption]", this.state.caption);
    formData.append("image[location]", this.state.location);
    formData.append("image[image]", this.state.imageFile);
    this.props.uploadPhoto(formData)
    .then( () => this.props.history.push(`/user/${this.state.userId}`));
  }

  clearButtonClasses() {
    const active = document.getElementsByClassName('button-active');
    const preview = document.getElementById('image-preview');
    preview.className = '';
    while (active.length) {
      active[0].classList.remove('button-active');
    }
  }

  activateButton(buttonName) {
    document.getElementById(buttonName).className = 'button-active';
  }

  _toggleBlur(e) {
    e.preventDefault();
    this.clearButtonClasses();
    document.getElementById('image-preview').classList.toggle('blur');
    // document.getElementById('button-blur').classList.toggle('button-active');
    this.activateButton('button-blur');
  }
  _toggleBright(e) {
    e.preventDefault();
    this.clearButtonClasses();
    document.getElementById('image-preview').classList.toggle('brighten');
    this.activateButton('button-bright');
  }
  _toggleDark(e) {
    e.preventDefault();
    this.clearButtonClasses();
    document.getElementById('image-preview').classList.toggle('darken');
    this.activateButton('button-dark');
  }
  _toggleGrey(e) {
    e.preventDefault();
    this.clearButtonClasses();
    document.getElementById('image-preview').classList.toggle('greyscale');
    this.activateButton('button-grey');
  }
  _toggleSepia(e) {
    e.preventDefault();
    this.clearButtonClasses();
    document.getElementById('image-preview').classList.toggle('sepia');
    this.activateButton('button-sepia');
  }
  _toggleContrast(e) {
    e.preventDefault();
    this.clearButtonClasses();
    document.getElementById('image-preview').classList.toggle('contrast');
    this.activateButton('button-contrast');
  }
  _toggleClear(e) {
    e.preventDefault();
    this.clearButtonClasses();
    document.getElementById('image-preview').className = ' ';
    this.activateButton('button-clear');
  }

  grabPreview() {
    return (this.state.imageFile !== null) ? (
      <figure className="preview-box">
        <img id="image-preview" src={this.state.imageUrl} className="" />

        <button
          id="button-blur"
          className=""
          onClick={this._toggleBlur}>Blur</button>
        <button
          id="button-bright"
          className=""
          onClick={this._toggleBright}>Brighten</button>
        <button
          id="button-dark"
          className=""
          onClick={this._toggleDark}>Darken</button>
        <button
          id="button-grey"
          className=""
          onClick={this._toggleGrey}>Greyscale</button>
        <button
          id="button-sepia"
          className=""
          onClick={this._toggleSepia}>Sepia</button>
        <button
          id="button-contrast"
          className=""
          onClick={this._toggleContrast}>Contrast</button>
        <button
          id="button-clear"
          className=""
          onClick={this._toggleClear}>Clear</button>


      </figure>
    ) : null;
  }

  render() {
    return (
      <div className="main-content-container">
        <section className="center-text container upload-box">
          <h2 className="shootr">Upload a Photo</h2>
          <input type="file" onChange={this._updateFile} />
          { this.grabPreview() }
          <textarea
            id="caption"
            placeholder="Add a caption"
            onChange={this._update('caption')}>
          </textarea>
          <input
            id="location"
            type="text"
            placeholder="Location"
            onChange={this._update('location')} />
          <button onClick={this._handleSubmit}>Submit</button>
        </section>
      </div>
    );
  }
}

export default Upload;
