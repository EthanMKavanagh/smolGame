import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
// import {sizing, spacing} from '@material-ui/system';
import mapStoreToProps from '../../redux/mapStoreToProps';

import PlayerList from '../PlayerList/PlayerList';
import './HomePage.css';

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
          <p>Invite others by giving them your Team ID: {this.props.store.user.team_id}</p> :
          <></>
        }

        <Paper elevation={3}>
            <TableContainer>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="tableHeading">Name</TableCell>
                    <TableCell align="center" className="tableHeading">Number</TableCell>
                    {this.props.store.user.authLevel === 'ADMIN' ?
                      <TableCell className="tableHeading" align="center" className="buttonCell">Delete</TableCell> :
                      <TableCell className="tableHeading"></TableCell>
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
