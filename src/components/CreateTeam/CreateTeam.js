import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextField, Button} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

class CreateTeam extends Component {

    state = {
        name: '',
        coach: '',
        image_url: '',
        bio: ''
    }

    onCreateTeam = () => {
        this.props.dispatch({
            type: 'CREATE_TEAM',
            payload: this.state
        });

        this.props.dispatch({
            type: 'EDIT_USER',
            payload: ''
        });

        this.setState({
            name: '',
            coach: '',
            image_url: '',
            bio: ''
        });

        this.props.history.push('/home');
    }

    onChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <h1>Team Name:</h1>
                <TextField 
                    id="outlined-basic"
                    label="Name" 
                    variant="outlined"
                    type="text"
                    onChange={(event) => this.onChange(event, 'name')}
                />

                <h1>Team Coach:</h1>
                <TextField 
                    id="outlined-basic"
                    label="Coach" 
                    variant="outlined"
                    type="text"
                    onChange={(event) => this.onChange(event, 'coach')}
                />

                <h1>Team Image:</h1>
                <TextField 
                    id="outlined-basic"
                    label="Image URL" 
                    variant="outlined"
                    type="text"
                    onChange={(event) => this.onChange(event, 'image_url')}
                />

                <h1>Team Bio:</h1>
                <TextField 
                    id="outlined-basic"
                    label="Bio" 
                    variant="outlined"
                    type="text"
                    onChange={(event) => this.onChange(event, 'bio')}
                />

                <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onCreateTeam}
                >
                    Save
                </Button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(CreateTeam));