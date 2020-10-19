import React, {Component} from 'react';
import {connect} from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import {TextField, Button, Grid} from '@material-ui/core';


class AddPlayer extends Component {

    // State
    state = {
        name: '',
        number: '',
        position: '',
        age: '',
        height: '',
        weight: ''
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
        this.props.dispatch({
            type: 'CREATE_NEW_PLAYER',
            payload: this.state
        });
        this.setState({
            name: '',
            number: '',
            position: '',
            age: '',
            height: '',
            weight: ''
        });
    } // end onAddPlayer

    render() {
        return (
            <Grid
                container
                // direction="row"
                // justify="center"
                // alignItems="center"
                // spacing={3}
            >
                {/* Inputs for the New Player */}
                <Grid item>
                    <TextField
                        className="addPlayerForm"
                        id="outlined-basic"
                        label="Name" 
                        variant="outlined"
                        type="text"
                        placeholder="Name"
                        onChange={(event) => this.onChange(event, "name")}
                    />
                </Grid>
                
                <Grid item>
                    <TextField
                        className="addPlayerForm"
                        id="outlined-basic"
                        label="Number" 
                        variant="outlined"
                        type="number"
                        placeholder="Number"
                        onChange={(event) => this.onChange(event, "number")}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        className="addPlayerForm"
                        id="outlined-basic"
                        label="Position" 
                        variant="outlined"
                        type="text"
                        placeholder="Position"
                        onChange={(event) => this.onChange(event, "position")}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        className="addPlayerForm"
                        id="outlined-basic"
                        label="Age" 
                        variant="outlined"
                        type="number"
                        placeholder="Age"
                        onChange={(event) => this.onChange(event, "age")}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        className="addPlayerForm"
                        id="outlined-basic"
                        label="Height" 
                        variant="outlined"
                        type="number"
                        placeholder="Height"
                        onChange={(event) => this.onChange(event, "height")}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        className="addPlayerForm"
                        id="outlined-basic"
                        label="Weight" 
                        variant="outlined"
                        type="text"
                        placeholder="Weight"
                        onChange={(event) => this.onChange(event, "weight")}
                    />
                </Grid>

                {/* Button to submit New Player */}
                <Grid item>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.onAddPlayer}
                    >
                        Add
                    </Button>
                </Grid>
            </Grid>
        ); // end return
    } // end render
} // end Component

export default connect(mapStoreToProps)(AddPlayer);
