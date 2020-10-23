import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Button, Switch} from '@material-ui/core';

import './RegisterForm.css';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    team_id: '',
    checkedA: true
  };

  registerUser = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        team_id: this.state.team_id
      }
    });

    if (this.state.team_id === '') {
      this.props.history.push('/create-team');
    }
    else {
      this.props.history.push('/home');
    }
      
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        {this.state.checkedA === true ?
          <div>
            <label htmlFor="team_id">
              Team ID:
              <input
                type="number"
                name="team_id"
                value={this.state.team_id}
                onChange={this.handleInputChangeFor('team_id')}
              />
            </label>
          </div> :
          <></>
        }
        
        <Switch
          checked={this.state.checkedA}
          onChange={this.handleChange}
          name="checkedA"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
        />
        <div>
          <Button variant="contained" className="btn" type="submit" name="submit" value="Register">Register</Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(RegisterForm));
