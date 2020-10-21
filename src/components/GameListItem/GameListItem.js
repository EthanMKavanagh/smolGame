import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Paper, Grid, Button} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './GameListItem.css';

class GameListItem extends Component {

    onDelete = (id) => {
        this.props.dispatch({
            type: 'DELETE_GAME',
            payload: id
        });
    }

    onEdit = (id) => {
        this.props.history.push(`/games/edit`);
    }

    render() {
        return (
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
                    spacing={5}
                >
                    <Grid item>
                        <h3>Touchdowns: {this.props.game.touchdowns}</h3>
                        <h3>Field Goals: {this.props.game.field_goals}</h3>
                        <h3>Interceptions: {this.props.game.interceptions}</h3>
                    </Grid>
                    <Grid item>
                        <h3>Total Rushing Yards: {this.props.game.rushing_yards}</h3>
                        <h3>Total Passing Yards: {this.props.game.passing_yards}</h3>
                        <h3>Total Receiving Yards: {this.props.game.receiving_yards}</h3>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                    className="btnRow"
                >
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.onEdit(this.props.game.id)}
                        >
                            Edit
                        </Button>
                    </Grid>
                    <Grid item xs={2}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => this.onDelete(this.props.game.id)}
                        >
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(GameListItem));