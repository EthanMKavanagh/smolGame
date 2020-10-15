import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PlayerProfile extends Component {
  render() {
    return (
      <>
        {this.props.store.players.map(player =>
          <>
            <h1>{player.name}</h1>
            <p>{player.age}</p>
            <p>{player.number}</p>
            <p>{player.position}</p>
            <p>{player.height}</p>
            <p>{player.weight}</p>
          </>
        )}
      </>
    );
  }
}

export default connect(mapStoreToProps)(PlayerProfile);