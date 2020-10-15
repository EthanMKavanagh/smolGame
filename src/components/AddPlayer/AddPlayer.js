import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { FormControl, Button } from 'react-bootstrap'


class AddPlayer extends Component {

    state = {
        name: '',
        number: '',
        position: '',
        age: '',
        height: '',
        weight: ''
    } // end state

    onChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    } // end onChange

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
            <div>
                {/* Inputs for the New Player */}
                <FormControl
                    placeholder="Player Name"
                    aria-label="Player Name"
                    aria-describedby="basic-addon1"
                    onChange={(event) => this.onChange(event, 'name')}
                />

                <span>
                    <FormControl
                        placeholder="Number"
                        aria-label="Number"
                        aria-describedby="basic-addon1"
                        onChange={(event) => this.onChange(event, 'number')}
                    />

                    <FormControl
                        placeholder="Position"
                        aria-label="Position"
                        aria-describedby="basic-addon1"
                        onChange={(event) => this.onChange(event, 'position')}
                    />
                </span>

                <FormControl
                    placeholder="Age"
                    aria-label="Age"
                    aria-describedby="basic-addon1"
                    onChange={(event) => this.onChange(event, 'age')}
                />

                <FormControl
                    placeholder="Height"
                    aria-label="Height"
                    aria-describedby="basic-addon1"
                    onChange={(event) => this.onChange(event, 'height')}
                />

                <FormControl
                    placeholder="Weight"
                    aria-label="Weight"
                    aria-describedby="basic-addon1"
                    onChange={(event) => this.onChange(event, 'weight')}
                />

                {/* Button to submit New Player */}
                <Button 
                    variant="success"
                    onClick={this.onAddPlayer}
                >
                    Add
                </Button>
            </div>
        ); // end return
    } // end render
} // end Component

export default connect(mapStoreToProps)(AddPlayer);
