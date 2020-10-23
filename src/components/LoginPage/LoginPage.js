import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Zoom} from '@material-ui/core';
import LoginForm from '../LoginForm/LoginForm';

class LoginPage extends Component {

  state = {
    checked: true
  }

  render() {
    return (
      <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
      <div>
        <LoginForm />

        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/registration');
            }}
          >
            Register
          </button>
        </center>
      </div>
      </Zoom>
    );
  }
}

export default connect(mapStoreToProps)(LoginPage);
