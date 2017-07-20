import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => {
  return (
    <div className="main-nav-container">
      <nav id="main-nav" role="navigation">
        <div className="logo-container">
          <Link to="/">
          <img src="http://res.cloudinary.com/norriskwan/image/upload/v1500594083/shootr_logo_rounded_n4zbkf.svg" id="logo"/>
          <h1>Shootr</h1>
          </Link>
        </div>

        <div className="search-container">
          <input
            id="search"
            type="text"
            placeholder="Search"/>
        </div>

        <div className="dashboard">
          <button
            id="nav-upload"
            className="icon icon-upload"
            onClick={logout}>Upload</button>

          <button
            id="nav-likes"
            className="icon icon-likes"
            onClick={logout}>Likes</button>

          <Link to={`/user/${currentUser.id}`}>
            <button
              id="nav-profile"
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
