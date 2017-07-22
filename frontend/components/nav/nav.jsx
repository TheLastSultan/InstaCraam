import React from 'react';
import { Link } from 'react-router-dom';
import ProfileOptions from './profile_options';

const personalGreeting = (currentUser, logout) => {

  const toggleShow = () => {
    const el = document.getElementById('profile-options');
    $(el).toggleClass('show');
    // document.getElementById('profile-options').classList.toggle("show");
  };

  return (
    <div className="main-nav-container">
      <nav id="main-nav" role="navigation">
        <div className="logo-container">
          <Link to="/">
          <img
            id="logo"
            title="Shootr"
            src="http://res.cloudinary.com/norriskwan/image/upload/v1500594083/shootr_logo_rounded_n4zbkf.svg"
          />
        <h1 className='shootr' title="Shootr App">Shootr</h1>
          </Link>
        </div>

        <div className="search-container">
          <input
            id="search"
            title="search"
            type="text"
            placeholder="Search" />
        </div>

        <div className="dashboard">
          <button
            id="nav-upload"
            title="upload"
            className="icon icon-upload">Upload</button>

          <Link to={`/explore`} className="icon">
            <button
              id="nav-explore"
              title="explore"
              className="icon icon-explore" >Explore</button>
          </Link>

          <button
            id="nav-likes"
            title="likes"
            className="icon icon-likes"
            onClick={logout}>Likes</button>


            <button
              id="nav-profile"
              title="profile"
              className="icon icon-profile"
              onClick={toggleShow}>User Profile</button>


          <ul id="profile-options">
            <span className="arrow-up profile-arrow"></span>
            <span className="arrow-up-cover profile-arrow-cover"></span>
            <Link to={`/user/${currentUser.id}`}>
              <li>Profile</li>
            </Link>
            <Link to={`/user/${currentUser.id}/edit`}>
              <li>Edit Profile</li>
            </Link>
            <li onClick={logout}>Log Out</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const Nav = ({ currentUser, logout }) => {
  return (
    currentUser ? personalGreeting(currentUser, logout) : (<div></div>)
  );
};

export default Nav;
