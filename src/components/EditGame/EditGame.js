import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';


class EditGame extends Component {


  render() {
      console.log('this.props.store', this.props.store);
    return (
      <div>
        <h1>Hello!</h1>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(EditGame);