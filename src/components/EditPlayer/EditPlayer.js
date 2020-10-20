import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

class EditPlayer extends Component {

    state = {
      name: null,
      age: null,
      number: null,
      position: null,
      height: null,
      weight: null
    }

    onChange = (event, propertyName) => {
      this.setState({
          ...this.state,
          [propertyName]: event.target.value
      });
    }

    onSave = (id) => {
      let objectToSend = {
        name: this.state.name,
        age: this.state.age,
        number: this.state.number,
        position: this.state.position,
        height: this.state.height,
        weight: this.state.weight,
        id: id
      }
      this.props.dispatch({
          type: 'CHANGE_PLAYER',
          payload: objectToSend
      });
      this.setState({
        name: null,
        age: null,
        number: null,
        position: null,
        height: null,
        weight: null
      });

      this.props.history.push('/home');
    }

  render() {
    return (
      <>
        {this.props.store.individualPlayer.map(player =>
          <>
            <h1>Name: {player.name}</h1>
            <TextField 
              id="outlined-basic"
              label="Name" 
              variant="outlined"
              type="text"
              value={this.state.name}
              onChange={(event) => this.onChange(event, 'name')}
            />

            <p>Age: {player.age}</p>
            <TextField 
              id="outlined-basic"
              label="Age" 
              variant="outlined"
              type="text"
              value={this.state.age}
              onChange={(event) => this.onChange(event, 'age')}
            />

            <p>Number: {player.number}</p>
            <TextField 
              id="outlined-basic"
              label="Number" 
              variant="outlined"
              type="text"
              value={this.state.number}
              onChange={(event) => this.onChange(event, 'number')}
            />

            <p>Position: {player.position}</p>
            <TextField 
              id="outlined-basic"
              label="Position" 
              variant="outlined"
              type="text"
              value={this.state.position}
              onChange={(event) => this.onChange(event, 'position')}
            />

            <p>Height: {player.height}</p>
            <TextField 
              id="outlined-basic"
              label="Height" 
              variant="outlined"
              type="text"
              value={this.state.height}
              onChange={(event) => this.onChange(event, 'height')}
            />

            <p>Weight: {player.weight}</p>
            <TextField 
              id="outlined-basic"
              label="Weight" 
              variant="outlined"
              type="text"
              value={this.state.weight}
              onChange={(event) => this.onChange(event, 'weight')}
            />

            <Button
                variant="contained"
                color="primary"
                onClick={() => this.onSave(player.id)}
            >
                Save
            </Button>
          </>
        )}
      </>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(EditPlayer));