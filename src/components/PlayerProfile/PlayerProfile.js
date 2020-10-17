import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

class PlayerProfile extends Component {

  onEditPlayer = () => {
    this.props.history.push('/edit/player')
  }

  render() {
    return (
      <>
        {this.props.store.individualPlayer.map(player =>
          <>
            <h1>Name: {player.name}</h1>
            <p>Age: {player.age}</p>
            <p>Number: {player.number}</p>
            <p>Position: {player.position}</p>
            <p>Height: {player.height}</p>
            <p>Weight: {player.weight}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onEditPlayer}
            >
              Edit
            </Button>
          </>
        )}
      </>



    );
  }
}

export default connect(mapStoreToProps)(PlayerProfile);