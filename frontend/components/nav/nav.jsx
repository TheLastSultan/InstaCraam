import React from 'react';
import { Link } from 'react-router-dom';

const personalGreeting = (currentUser, logout) => {
  return (
    <div className="main-nav-container">
      <nav id="main-nav" role="navigation">
        <div className="logo-container">
          <Link to="/">
          <img src="http://res.cloudinary.com/norriskwan/image/upload/v1500490229/shootr_logo_kga817.svg" id="logo"/>
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
          <Link to={`/api/user/${currentUser.id}`}>
            <button id="profile">User Profile</button>
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
