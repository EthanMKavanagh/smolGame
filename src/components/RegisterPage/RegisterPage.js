import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Zoom} from '@material-ui/core';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    checked: true
  };

  render() {
    return (
      <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
      <div>
        <RegisterForm />

        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              this.props.history.push('/login');
            }}
          >
            Login
          </button>
        </center>
      </div>
      </Zoom>
    );
  }
}

export default connect(mapStoreToProps)(RegisterPage);
