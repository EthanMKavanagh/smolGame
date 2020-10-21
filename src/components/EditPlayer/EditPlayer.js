import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Paper, Grid} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './EditPlayer.css';

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
                  placeholder={player.name}
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
                      placeholder={player.age}
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
                      placeholder={player.number}
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
                      placeholder={player.position}
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
                      placeholder={player.height}
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
                      placeholder={player.weight}
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
                    onClick={() => this.onSave(player.id)}
                >
                    Save
                </Button>
              </Grid>
            </Grid>
          </Paper>
        )}
      </>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(EditPlayer));