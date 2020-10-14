import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
    console.log('this.props.store.team.id', this.props.store.team.id);
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
                  <TableRow key={player.id}>
                      <TableCell 
                        component='th' 
                        scope='row'
                        align='center'
                      >
                        {player.name}
                      </TableCell>
                      <TableCell 
                        align='center'
                      >
                        {player.number}
                      </TableCell>
                      {this.props.store.user.authLevel === 'ADMIN' ?
                        <TableCell 
                          align='center'
                        >
                          <Button 
                            color='secondary' 
                            onClick={() => this.props.onDelete(player.id)}>
                            Delete
                          </Button>
                        </TableCell> :
                        <TableCell></TableCell>
                      }
                  </TableRow>
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
