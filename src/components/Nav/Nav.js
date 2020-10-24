import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import logo from './logo.png';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <img src={logo} alt="logo" width="90" height="50" className="logo"/>
        <h2 className="nav-title">smolGame</h2>
      </Link>
      <div className="nav-right">
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            {/* Player List aka Home Page */}
            <Link className="nav-link" to="/home">
              Home
            </Link>

            {/* Games Page */}
            <Link className="nav-link" to="/games">
              Games
            </Link>

            {/* About the Team Page */}
            <Link className="nav-link" to="/about">
              About The Team
            </Link>

            {props.store.user.authLevel === 'ADMIN' ?
              <>
                <Link className="nav-link" to="/add-player">
                  Add Player
                </Link>

                <Link className="nav-link" to="/add-game">
                  Add Game
                </Link>
              </> :
              <></>
            }

            <LogOutButton className="nav-link"/>
            {/* <Link className="nav-link" to="/info">
              Info Page
            </Link> */}
          </>
        )}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
