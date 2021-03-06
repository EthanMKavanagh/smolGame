import React, {Component} from 'react';
import {connect} from 'react-redux';
import {IconButton, Paper, Grid, Zoom} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {withStyles} from '@material-ui/core/styles';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PlayerProfile.css';

const styles = {
  IconButton: {
    color: '#323232'
  }
}

class PlayerProfile extends Component {

  state = {
    checked: true
  }

  onEditPlayer = () => {
    this.props.history.push('/edit/player')
  }

  render() {
    const classes = this.props.classes
    return (
      <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
      <div>
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
                <p>Weight: {player.weight} lbs</p>
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
                  <IconButton
                    variant="contained"
                    onClick={this.onEditPlayer}
                  >
                    <EditIcon className={classes.IconButton}/>
                  </IconButton>
                </Grid>
              </Grid> :
              <></>
            }
          </Paper>
        )}
      </div>
      </Zoom>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(PlayerProfile));