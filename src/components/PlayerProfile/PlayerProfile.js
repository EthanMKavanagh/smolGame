import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PlayerProfile extends Component {
  render() {
    return (
      <>
        {this.props.store.players.map(player =>
          <>
            <h1>Name: {player.name}</h1>
            <p>Age: {player.age}</p>
            <p>Number: {player.number}</p>
            <p>Position: {player.position}</p>
            <p>Height: {player.height}</p>
            <p>Weight: {player.weight}</p>
          </>
        )}
      </>
    );
  }
}

export default connect(mapStoreToProps)(PlayerProfile);