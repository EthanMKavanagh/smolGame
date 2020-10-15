import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PlayerProfile extends Component {
  render() {
    return (
      <>
        
          <h1>{this.props.player.name}</h1>

      </>
    );
  }
}

export default connect(mapStoreToProps)(PlayerProfile);