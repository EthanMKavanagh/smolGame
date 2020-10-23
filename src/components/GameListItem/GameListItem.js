import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Paper, Grid, IconButton, Zoom} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './GameListItem.css';

class GameListItem extends Component {

    // state = {
    //     checked: true
    // }

    onDelete = (id) => {
        this.props.dispatch({
            type: 'DELETE_GAME',
            payload: id
        });
    }

    onEdit = (game) => {
        console.log('Game', game);
        this.props.dispatch({
            type: 'SET_INDIVIDUAL_GAME',
            payload: game
        });

        this.props.history.push(`/games/edit`);
    }

    render() {
        return (
            //<Zoom in={this.state.checked}>
                <Paper 
                    className="gamePaper" 
                    elevation={3}
                    key={this.props.game.id}>
                    <Grid
                        container
                        direction="row"
                        justify="space-around"
                        alignItems="flex-start"
                    >
                        <Grid item>
                            <h1>{this.props.game.name}</h1>
                            <h1>{this.props.game.score}</h1>
                        </Grid>
                        <Grid item>
                            { this.props.game.isWin ?
                                <h1>Win</h1> :
                                <h1>Loss</h1>
                            }
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <Grid item className="stats">
                            <p>Touchdowns: {this.props.game.touchdowns}</p>
                            <p>Field Goals: {this.props.game.field_goals}</p>
                            <p>Interceptions: {this.props.game.interceptions}</p>
                        </Grid>
                        <Grid item className="stats">
                            <p>Total Rushing Yards: {this.props.game.rushing_yards}</p>
                            <p>Total Passing Yards: {this.props.game.passing_yards}</p>
                            <p>Total Receiving Yards: {this.props.game.receiving_yards}</p>
                        </Grid>
                    </Grid>

                {this.props.store.user.authLevel === 'ADMIN' ?
                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    className="btnRow"
                >
                    <Grid item xs={1}>
                        <IconButton
                            aria-label="edit"
                            onClick={() => this.onEdit(this.props.game)}
                        >
                            <EditIcon />
                        </IconButton>
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton
                            aria-label="delete"
                            onClick={() => this.onDelete(this.props.game.id)}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Grid>
                </Grid> :
                <></>
                }  
             </Paper>
            //</Zoom>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(GameListItem));