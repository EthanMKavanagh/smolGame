import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Paper, Grid, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './EditGame.css';

const styles = {
    Button: {
        backgroundColor: 'black',
        color: 'white'
    }
}

class EditGame extends Component {

    state = {
        id: this.props.store.individualGame.id,
        name: this.props.store.individualGame.name,
        score: this.props.store.individualGame.score,
        touchdowns: this.props.store.individualGame.touchdowns,
        field_goals: this.props.store.individualGame.field_goals,
        interceptions: this.props.store.individualGame.interceptions,
        rushing_yards: this.props.store.individualGame.rushing_yards,
        passing_yards: this.props.store.individualGame.passing_yards,
        receiving_yards: this.props.store.individualGame.receiving_yards,
        isWin: this.props.store.individualGame.isWin
    }

    onSave = () => {
        let objectToSend = {
            id: this.state.id,
            name: this.state.name,
            score: this.state.score,
            touchdowns: Number(this.state.touchdowns),
            field_goals: Number(this.state.field_goals),
            interceptions: Number(this.state.interceptions),
            rushing_yards: Number(this.state.rushing_yards),
            passing_yards: Number(this.state.passing_yards),
            receiving_yards: Number(this.state.receiving_yards),
            isWin: this.state.isWin
        }
        this.props.dispatch({
            type: 'CHANGE_GAME',
            payload: objectToSend
        });

        this.props.history.push('/games')
    }

    onChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    }

    onCancel = () => {
        this.props.history.push('/games');
    }

  render() {
    const classes = this.props.classes
    return (
        <Paper
            elevation={3}
            className="editGamePaper"
        >
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
            >
                <Grid item>
                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h1 className="title2">Name:</h1>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                label="Game Name" 
                                variant="outlined"
                                type="text"
                                value={this.state.name}
                                onChange={(event) => this.onChange(event, 'name')}
                            />
                        </Grid>
                    </Grid>
                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h1 className="title2">Score:</h1>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                label="Score" 
                                variant="outlined"
                                type="text"
                                value={this.state.score}
                                onChange={(event) => this.onChange(event, 'score')}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className="isWin">
                    <div>
                        <FormControl  component="fieldset">
                            <FormLabel  component="legend">Outcome</FormLabel>
                            <RadioGroup  row aria-label="Outcome" name="Outcome"  defaultValue={this.state.isWin} value={this.value} onChange={(event) => this.onChange(event, 'isWin')}>
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
                justify="center"
                alignItems="center"
                spacing={4}
            >
                <Grid item>
                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h3 className="title4">Touchdowns:</h3>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                size="small"
                                label="Touchdowns" 
                                variant="outlined"
                                type="text"
                                value={this.state.touchdowns}
                                onChange={(event) => this.onChange(event, 'touchdowns')}
                            />
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h3 className="title4">Field Goals:</h3>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                size="small"
                                label="Field Goals" 
                                variant="outlined"
                                type="text"
                                value={this.state.field_goals}
                                onChange={(event) => this.onChange(event, 'field_goals')}
                            />
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h3 className="title4">Interceptions:</h3>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                size="small"
                                label="Interceptions" 
                                variant="outlined"
                                type="text"
                                value={this.state.interceptions}
                                onChange={(event) => this.onChange(event, 'interceptions')}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h3 className="title3">Rushing Yards:</h3>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                size="small"
                                label="Rushing Yards" 
                                variant="outlined"
                                type="text"
                                value={this.state.rushing_yards}
                                onChange={(event) => this.onChange(event, 'rushing_yards')}
                            />
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h3 className="title3">Passing Yards:</h3>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                size="small"
                                label="Passing Yards" 
                                variant="outlined"
                                type="text"
                                value={this.state.passing_yards}
                                onChange={(event) => this.onChange(event, 'passing_yards')}
                            />
                        </Grid>
                    </Grid>

                    <Grid 
                        container
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                    >
                        <Grid item>
                            <h3 className="title3">Receiving Yards:</h3>
                        </Grid>
                        <Grid item>
                            <TextField 
                                id="outlined-basic"
                                size="small"
                                label="Receiving Yards" 
                                variant="outlined"
                                type="text"
                                value={this.state.receiving_yards}
                                onChange={(event) => this.onChange(event, 'receiving_yards')}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                direction="row"
                justify="flex-end"
                alignItems="center"
            >
                <Grid item className="edtBtn">
                    <Button 
                        onClick={this.onCancel}
                        className={classes.Button}
                    >
                        Cancel
                    </Button>
                </Grid>
                <Grid item className="edtBtn">
                    <Button 
                        onClick={this.onSave} 
                        className={classes.Button}
                    >
                        Save
                    </Button>
                </Grid>

            </Grid>
        </Paper>
    );
  }
}

export default connect(mapStoreToProps)(withStyles(styles)(withRouter(EditGame)));