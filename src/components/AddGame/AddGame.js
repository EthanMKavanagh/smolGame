import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Button, Paper, Grid, Zoom} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import './AddGame.css';

const styles = {
    Button: {
        backgroundColor: '#323232',
        color: 'white'
    }
}

class AddGame extends Component {

    state = {
        name: '',
        score: '',
        touchdowns: '',
        field_goals: '',
        interceptions: '',
        rushing_yards: '',
        passing_yards: '',
        receiving_yards: '',
        isWin: '',
        checked: true
    } // end state

    // Set state to inputs
    onChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    } // end onChange

    // Add game to DB
    onAddGame = () => {
        let objectToSend = {
            name: this.state.name,
            score: this.state.score,
            touchdowns: this.state.touchdowns,
            field_goals: this.state.field_goals,
            interceptions: this.state.interceptions,
            rushing_yards: this.state.rushing_yards,
            passing_yards: this.state.passing_yards,
            receiving_yards: this.state.receiving_yards,
            isWin: this.state.isWin
        }

        this.props.dispatch({
            type: 'CREATE_NEW_GAME',
            payload: objectToSend
        });
        this.setState({
            name: '',
            score: '',
            touchdowns: '',
            field_goals: '',
            interceptions: '',
            rushing_yards: '',
            passing_yards: '',
            receiving_yards: '',
            isWin: ''
        });
        this.props.history.push('/games');
    } // end onAddGame

  render() {
    const classes = this.props.classes
    return (
        <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
        <Paper
            elevation={3}
            className="addGamePaper"
        >
            <h1 className="title">Add Game Form</h1>
            <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className="form"
            >
                <Grid 
                    item 
                    xs={2}
                >
                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Name" 
                            variant="outlined"
                            type='text'
                            placeholder='Game 1 @City'
                            required
                            onChange={(event) => this.onChange(event, 'name')}
                        />
                    </div>

                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Score" 
                            variant="outlined"
                            type='text'
                            placeholder="## - ##"
                            required
                            onChange={(event) => this.onChange(event, 'score')}
                        />
                    </div>

                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Touchdowns" 
                            variant="outlined"
                            type='text'
                            placeholder="Touchdowns"
                            required
                            onChange={(event) => this.onChange(event, 'touchdowns')}
                        />
                    </div>
                </Grid>

                <Grid 
                    item 
                    xs={2}
                >
                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Field Goals" 
                            variant="outlined"
                            type='text'
                            placeholder="Field Goals"
                            required
                            onChange={(event) => this.onChange(event, 'field_goals')}
                        />
                    </div>

                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Interceptions" 
                            variant="outlined"
                            type='text'
                            placeholder="Interceptions"
                            required
                            onChange={(event) => this.onChange(event, 'interceptions')}
                        />
                    </div>
                    
                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Rushing Yards" 
                            variant="outlined"
                            type='text'
                            placeholder="Rushing Yards"
                            required
                            onChange={(event) => this.onChange(event, 'rushing_yards')}
                        />
                    </div>
                </Grid>

                <Grid
                    item
                    xs={2}
                >
                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Passing Yards" 
                            variant="outlined"
                            type='text'
                            placeholder="Passing Yards"
                            required
                            onChange={(event) => this.onChange(event, 'passing_yards')}
                        />
                    </div>

                    <div className="addGameForm">
                        <TextField
                            className="input"
                            id="outlined-basic"
                            label="Receiving Yards" 
                            variant="outlined"
                            type='text'
                            placeholder="Receiving Yards"
                            required
                            onChange={(event) => this.onChange(event, 'receiving_yards')}
                        />
                    </div>

                    <div className="addGameForm">
                        <FormControl component="fieldset">
                            <FormLabel required component="legend">Outcome</FormLabel>
                            <RadioGroup row aria-label="Outcome" name="Outcome"  value={this.value} onChange={(event) => this.onChange(event, 'isWin')}>
                                <FormControlLabel value="TRUE" control={<Radio />} label="Win" />
                                <FormControlLabel value="FALSE" control={<Radio />} label="Loss" />
                            </RadioGroup>
                        </FormControl>
                    </div>
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
                    className="editBtn"
                >
                    <Button
                        variant="contained"
                        className={classes.Button}
                        onClick={this.onAddGame}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        </Paper>
        </Zoom>
        );
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(withRouter(AddGame)));
