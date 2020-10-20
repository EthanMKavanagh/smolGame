import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Paper, Grid} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PlayerProfile.css';

class PlayerProfile extends Component {

  onEditPlayer = () => {
    this.props.history.push('/edit/player')
  }

  render() {
    return (
      <>
        {this.props.store.individualPlayer.map(player =>
          <Paper
            elevation={3}
            className="playerProfilePaper"
          >
            <h1 className="playerName">{player.name}</h1>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={7}
            >
              <Grid item>
                <p>Age: {player.age}</p>
                <p>Number: {player.number}</p>
                <p>Position: {player.position}</p>
              </Grid>

              <Grid item>
                <p>Height: {player.height}</p>
                <p>Weight: {player.weight}</p>
              </Grid>
            </Grid>

            {this.props.store.user.authLevel === 'ADMIN' ?
              <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="flex-start"
              >
                <Grid
                  item
                  xs={1}
                  className="editBtn"
                >
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onEditPlayer}
                  >
                    Edit
                  </Button>
                </Grid>
              </Grid> :
              <></>
            }
          </Paper>
        )}
      </>
    );
  }
}

export default connect(mapStoreToProps)(PlayerProfile);