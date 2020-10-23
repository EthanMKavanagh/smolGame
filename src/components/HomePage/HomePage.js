import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Zoom} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import mapStoreToProps from '../../redux/mapStoreToProps';

import PlayerList from '../PlayerList/PlayerList';
import './HomePage.css';

const styles = {
  Table: {
    width: '600px',
    margin: 'auto',
    paddingLeft: '20px',
    paddingRight: '20px'
  },
  TableCell: {
    width: '150px',
    height: '50px'
  },
  TableCell2: {
    width: '50px',
    height: '50px'
  }
}

class HomePage extends Component {

  state = {
    checked: true
  }

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
    const classes = this.props.classes
    return (
      <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
        <div>
          <div className="infoHeading">
            <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
            {this.props.store.user.authLevel === 'ADMIN' ?
              <p>Invite others by giving them your Team ID: {this.props.store.user.team_id}</p> :
              <></>
            }
          </div>

          <Paper elevation={3} className={classes.Table}>
              <TableContainer >
                <Table aria-label="simple table" className={classes.Table}>
                  <TableHead>
                    <TableRow>
                      <TableCell className={classes.TableCell}>Name</TableCell>
                      <TableCell align="center" className={classes.TableCell2}>Number</TableCell>
                      {this.props.store.user.authLevel === 'ADMIN' ?
                        <TableCell align="right" className={classes.TableCell2}></TableCell> :
                        <></>
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
      </Zoom>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(withStyles(styles)(HomePage));