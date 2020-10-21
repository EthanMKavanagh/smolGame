import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Paper, Grid, TextField, Button} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './EditSpecificPlayer.css';

class EditSpecificPlayer extends Component {

    state = {
        name: this.props.player.name,
        age: this.props.player.age,
        number: this.props.player.number,
        position: this.props.player.position,
        height: this.props.player.height,
        weight: this.props.player.weight
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
            name: this.props.player.name,
            age: this.props.player.age,
            number: this.props.player.number,
            position: this.props.player.position,
            height: this.props.player.height,
            weight: this.props.player.weight
        });
  
        this.props.history.push('/home');
      }
  render() {
      console.log('this.props.player', this.props.player)
    return (
        <>
          <Paper
            elevation={3}
            className="editPlayerPaper"
          >
            {/* Name Input */}
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
              className="playerName"
            >
              <Grid item>
                <h1 className="nameTag">Name:</h1>
              </Grid>
              <Grid item>
                <TextField 
                  id="outlined-basic"
                  label="Name" 
                  variant="outlined"
                  type="text"
                  value={this.state.name}
                  onChange={(event) => this.onChange(event, 'name')}
                />
              </Grid>
            </Grid>

            {/* Entire Form */}
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={5}
            >
              <Grid item>
                {/* Left Side of Form */}
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className="input"
                >
                  <Grid item>
                    <p className="subtitle">Age:</p>
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="outlined-basic"
                      label="Age" 
                      variant="outlined"
                      type="text"
                      size="small"
                      value={this.state.age}
                      onChange={(event) => this.onChange(event, 'age')}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className="input"
                >
                  <Grid item>
                    <p className="subtitle">Number:</p>
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="outlined-basic"
                      label="Number" 
                      variant="outlined"
                      type="text"
                      size="small"
                      value={this.state.number}
                      onChange={(event) => this.onChange(event, 'number')}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className="input"
                >
                  <Grid item>
                    <p className="subtitle">Position:</p>
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="outlined-basic"
                      label="Position" 
                      variant="outlined"
                      type="text"
                      size="small"
                      value={this.state.position}
                      onChange={(event) => this.onChange(event, 'position')}
                    />
                  </Grid>
                </Grid>
              </Grid>

              {/* Right Side of Form */}
              <Grid item>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className="input"
                >
                  <Grid item>
                    <p className="subtitle">Height:</p>
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="outlined-basic"
                      label="Height" 
                      variant="outlined"
                      type="text"
                      size="small"
                      value={this.state.height}
                      onChange={(event) => this.onChange(event, 'height')}
                    />
                  </Grid>
                </Grid>

                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  className="input"
                >
                  <Grid item>
                    <p className="subtitle">Weight:</p>
                  </Grid>
                  <Grid item>
                    <TextField 
                      id="outlined-basic"
                      label="Weight" 
                      variant="outlined"
                      type="text"
                      size="small"
                      value={this.state.weight}
                      onChange={(event) => this.onChange(event, 'weight')}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="flex-start"
            >
              <Grid 
                item
                xs={1}
                className="saveBtn"
              >
                {/* Save Button */}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => this.onSave(this.props.player.id)}
                >
                    Save
                </Button>
              </Grid>
            </Grid>
          </Paper>
      </>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(EditSpecificPlayer));