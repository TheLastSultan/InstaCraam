import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => {
  return (
    <div className="main-nav-container">
      <nav id="main-nav" role="navigation">
        <div className="logo-container">
          <Link to="/">
          <img src="assets/shootr_logo.svg" id="logo"/>
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
          <button id="upload" onClick={logout}>Upload</button>
          <button id="likes" onClick={logout}>Likes</button>
          <button id="profile" onClick={logout}>Log Out</button>
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
