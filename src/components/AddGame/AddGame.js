import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import { Button } from 'react-bootstrap';
import { TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio } from '@material-ui/core';

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
        isWin: ''
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
        this.props.dispatch({
            type: 'CREATE_NEW_GAME',
            payload: this.state
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
    } // end onAddGame

  render() {
    return (
        <div>
            <TextField
                id="outlined-basic"
                label="Name" 
                variant="outlined"
                type='text'
                placeholder='Name'
                onChange={(event) => this.onChange(event, 'name')}
            />

            <TextField
                id="outlined-basic"
                label="Score" 
                variant="outlined"
                type='text'
                placeholder="Score"
                onChange={(event) => this.onChange(event, 'score')}
            />

            <TextField
                id="outlined-basic"
                label="Touchdowns" 
                variant="outlined"
                type='text'
                placeholder="Touchdowns"
                onChange={(event) => this.onChange(event, 'touchdowns')}
            />

            <TextField
                id="outlined-basic"
                label="Field Goals" 
                variant="outlined"
                type='text'
                placeholder="Field Goals"
                onChange={(event) => this.onChange(event, 'field_goals')}
            />

            <TextField
                id="outlined-basic"
                label="Interceptions" 
                variant="outlined"
                type='text'
                placeholder="Interceptions"
                onChange={(event) => this.onChange(event, 'interceptions')}
            />

            <TextField
                id="outlined-basic"
                label="Rushing Yards" 
                variant="outlined"
                type='text'
                placeholder="Rushing Yards"
                onChange={(event) => this.onChange(event, 'rushing_yards')}
            />

            <TextField
                id="outlined-basic"
                label="Passing Yards" 
                variant="outlined"
                type='text'
                placeholder="Passing Yards"
                onChange={(event) => this.onChange(event, 'passing_yards')}
            />

            <TextField
                id="outlined-basic"
                label="Receiving Yards" 
                variant="outlined"
                type='text'
                placeholder="Receiving Yards"
                onChange={(event) => this.onChange(event, 'receiving_yards')}
            />

            <FormControl component="fieldset">
                <FormLabel component="legend">Outcome</FormLabel>
                <RadioGroup row aria-label="Outcome" name="Outcome" value={this.value} onChange={(event) => this.onChange(event, 'isWin')}>
                    <FormControlLabel value="TRUE" control={<Radio />} label="Win" />
                    <FormControlLabel value="FALSE" control={<Radio />} label="Loss" />
                </RadioGroup>
            </FormControl>

            <Button
                variant="success"
                onClick={this.onAddGame}
            >
                Add
            </Button>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(AddGame);
