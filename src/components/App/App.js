import React, { Component } from 'react';
import {HashRouter as Router, Route, Redirect, Switch} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import InfoPage from '../InfoPage/InfoPage';
// import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import GameList from '../GameList/GameList';
import AddPlayer from '../AddPlayer/AddPlayer';
import AddGame from '../AddGame/AddGame';
import PlayerProfile from '../PlayerProfile/PlayerProfile';
import EditTeam from '../EditTeam/EditTeam';
import EditPlayer from '../EditPlayer/EditPlayer';
import CreateTeam from '../CreateTeam/CreateTeam';
import EditGame from '../EditGame/EditGame';

import mapStoreToProps from '../../redux/mapStoreToProps';
import './App.css';



class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/login" />
            

            {/* Visiting localhost:3000/about will show the about page. */}
            <ProtectedRoute
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
              component={AboutPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              exact
              path="/create-team"
              component={CreateTeam}
            />

            <ProtectedRoute
              // logged in shows UserPage else shows LoginPage
              exact
              path="/home"
              component={HomePage}
            />

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
              component={InfoPage}
            />

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/home"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/home"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/home"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/home"
            />

            <ProtectedRoute
              exact
              path="/games"
              component={GameList}
            />

            <ProtectedRoute
              exact
              path="/add-player"
              component={AddPlayer}
            />

            <ProtectedRoute
              exact
              path="/add-game"
              component={AddGame}
            />

            <ProtectedRoute
              exact
              path="/player-profile"
              component={PlayerProfile}
            />

            <ProtectedRoute
              exact
              path="/edit/team"
              component={EditTeam}
            />

            <ProtectedRoute
              exact
              path="/edit/player"
              component={EditPlayer}
            />

            <ProtectedRoute 
              exact
              path="/games/edit"
              component={EditGame}
            />
            {/* <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LandingPage at "/home"
              exact
              path="/home"
              component={LandingPage}
              authRedirect="/home"
            /> */}

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(mapStoreToProps)(App);
