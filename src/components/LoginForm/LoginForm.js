import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Button, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  Button: {
    backgroundColor: '#323232',
    color: 'white',
    margin: 'auto'
  },
  TextField: {
    margin: '5px'
  }
}

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
  };

  login = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      ...this.state,
      [propertyName]: event.target.value,
    });
  };

  render() {
    const classes = this.props.classes
    return (
      <form className="formPanel" onSubmit={this.login}>
        <h2>Login</h2>
        {this.props.store.errors.loginMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.loginMessage}
          </h3>
        )}
        <div>
        <TextField
          className={classes.TextField}
          id="outlined-basic"
          label="Username" 
          variant="outlined"
          type="text"
          placeholder="Username"
          onChange={(event) => this.handleInputChangeFor(event, 'username')}
        />

        <TextField
          className={classes.TextField}
          id="outlined-basic"
          label="Password" 
          variant="outlined"
          type="password"
          placeholder="Password"
          onChange={(event) => this.handleInputChangeFor(event, 'password')}
        />
        </div>
        <div>
          <Button variant="contained" className={classes.Button} type="submit" name="submit" value="Log In" >Log In</Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(LoginForm));
