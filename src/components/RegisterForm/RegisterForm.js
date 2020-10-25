import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Button, Switch, TextField} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import './RegisterForm.css';

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

  handleInputChangeFor = (event, propertyName) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  render() {
    const classes = this.props.classes
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        {this.state.checkedA ?
          <h2>Register as a Player</h2> :
          <h2>Register as a Coach</h2>
        }
        {this.props.store.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.store.errors.registrationMessage}
          </h3>
        )}
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
        {this.state.checkedA === true ?
          <div>
            <TextField
              className={classes.TextField}
              id="outlined-basic"
              label="Team ID" 
              variant="outlined"
              type="text"
              placeholder="Team ID"
              onChange={(event) => this.handleInputChangeFor(event, 'team_id')}
            />
          </div> :
          <></>
        }
        <br></br>
        <Switch
          className={classes.switch}
          checked={this.state.checkedA}
          onChange={this.handleChange}
          name="checkedA"
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
  
        />
        <div>
          <Button variant="contained" className={classes.Button} type="submit" name="submit" value="Register">Register</Button>
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(withRouter(RegisterForm)));
