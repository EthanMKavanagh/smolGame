import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import PlayerList from '../PlayerList/PlayerList';

class HomePage extends Component {
  
  componentDidMount = () => {
    this.getTeam();
    this.getPlayers();
  }

  getTeam = () => {
    this.props.dispatch({
      type: 'FETCH_TEAM'
    });
  }

  getPlayers = () => {
    this.props.dispatch({
      type: 'FETCH_PLAYERS'
    });
  }

  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        {this.props.store.user.authLevel === 'ADMIN' ?
          <p>Invite others by giving them your Team ID: {this.props.store.team.id}</p> :
          <></>
        }

        <Paper elevation={3} className='paperTable'>
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align='center'>Name</TableCell>
                  <TableCell align='center'>Number</TableCell>
                  {this.props.store.user.authLevel === 'ADMIN' ?
                    <TableCell align='center' className='buttonCell'>Delete</TableCell> :
                    <TableCell></TableCell>
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {this.props.store.players.map(player =>
                  <PlayerList 
                    player={player}
                    key={player.id}
                  />
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(HomePage);
