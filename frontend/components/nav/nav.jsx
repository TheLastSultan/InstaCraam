import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => {


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
            className="icon icon-upload"
            onClick={logout}>Upload</button>

          <Link to={`/explore`} className="icon">
            <button
              id="nav-explore"
              title="explore"
              className="icon icon-explore"
              onClick={logout}>Explore</button>
          </Link>

          <button
            id="nav-likes"
            title="likes"
            className="icon icon-likes"
            onClick={logout}>Likes</button>

          <Link to={`/user/${currentUser.id}`}>
            <button
              id="nav-profile"
              title="profile"
              className="icon icon-profile">User Profile</button>
          </Link>
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
