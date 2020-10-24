import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Grid, Paper, Zoom} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import './AddPlayer.css';

const styles = {
    Button: {
        backgroundColor: '#323232',
        color: 'white'
    }
}

class AddPlayer extends Component {

    // State
    state = {
        name: '',
        number: '',
        position: '',
        age: '',
        height: '',
        weight: '',
        checked: true
    } // end state

    // Set state to inputs
    onChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    } // end onChange

    // Add player to DB
    onAddPlayer = () => {
        let objectToSend = {
            name: this.state.name,
            number: this.state.number,
            position: this.state.position,
            age: this.state.age,
            height: this.state.height,
            weight: this.state.weight
        }
        this.props.dispatch({
            type: 'CREATE_NEW_PLAYER',
            payload: objectToSend
        });
        this.setState({
            name: '',
            number: '',
            position: '',
            age: '',
            height: '',
            weight: ''
        });
        this.props.history.push('/home');
    } // end onAddPlayer

    render() {
        const classes = this.props.classes
        return (
            <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
            <Paper
                elevation={3}
                className="addPlayerPaper"
            >
                <h1 className="title">Add Player Form</h1>
                <Grid
                    container
                    direction="row"
                    justify="space-evenly"
                    alignItems="center"
                    className="form"
                >
                    {/* Inputs for the New Player */}
                    <Grid 
                        item
                        xs={2}
                    >
                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Name" 
                                variant="outlined"
                                type="text"
                                placeholder="Name"
                                required
                                onChange={(event) => this.onChange(event, "name")}
                            />
                        </div>

                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Number" 
                                variant="outlined"
                                type="number"
                                placeholder="Number"
                                required
                                onChange={(event) => this.onChange(event, "number")}
                            />
                        </div>
                    </Grid>

                    <Grid 
                        item 
                        xs={2}
                    >
                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Position" 
                                variant="outlined"
                                type="text"
                                placeholder="Position"
                                required
                                onChange={(event) => this.onChange(event, "position")}
                            />
                        </div>

                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Age" 
                                variant="outlined"
                                type="number"
                                placeholder="Age"
                                required
                                onChange={(event) => this.onChange(event, "age")}
                            />
                        </div>
                    </Grid>

                    <Grid 
                        item 
                        xs={2}
                    >
                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Height" 
                                variant="outlined"
                                type="text"
                                placeholder="Height"
                                required
                                onChange={(event) => this.onChange(event, "height")}
                            />
                        </div>

                        <div className="addPlayerForm">
                            <TextField
                                className="input"
                                id="outlined-basic"
                                label="Weight" 
                                variant="outlined"
                                type="text"
                                placeholder="Weight"
                                required
                                onChange={(event) => this.onChange(event, "weight")}
                            />
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
                        {/* Button to submit New Player */}
                        <Button
                            variant="contained"
                            className={classes.Button}
                            onClick={this.onAddPlayer}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            </Zoom>
        ); // end return
    } // end render
} // end Component

export default connect(mapStoreToProps)(withStyles(styles)(withRouter(AddPlayer)));
