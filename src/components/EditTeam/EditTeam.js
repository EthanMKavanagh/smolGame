import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button, TextField} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

class EditTeam extends Component {

    state = {
        name: '',
        coach: '',
        image_url: '',
        bio: ''
    }

    onSave = (id) => {
        this.props.dispatch({
            type: 'CHANGE_TEAM',
            payload: id
        });
        this.setState({
            name: '',
            coach: '',
            image_url: '',
            bio: ''
        });

        this.props.history.push('/about')
    }

    onChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        });
    }

    render() {
        return (
            <>
                {this.props.store.team.map(team =>
                    <div key={team.id}>
                        <h1>We are the</h1>
                        <TextField 
                            id="outlined-basic"
                            label="Team Name" 
                            variant="outlined"
                            type="text"
                            placeholder=""
                            value={team.name}
                            onChange={(event) => this.onChange(event, 'name')}
                        />

                        <h3>Coach:</h3>
                        <TextField 
                            id="outlined-basic"
                            label="Coach" 
                            variant="outlined"
                            type="text"
                            placeholder=""
                            value={team.coach}
                            onChange={(event) => this.onChange(event, 'coach')}
                        />
                        
                        <img src={team.image_url} alt='' />
                        <TextField 
                            id="outlined-basic"
                            label="Image URL" 
                            variant="outlined"
                            type="text"
                            placeholder=""
                            value={team.image_url}
                            onChange={(event) => this.onChange(event, 'image_url')}
                        />

                        <p>Bio:</p>
                        <TextField 
                            id="outlined-basic"
                            label="Boi" 
                            variant="outlined"
                            type="text"
                            placeholder=""
                            value={team.bio}
                            onChange={(event) => this.onChange(event, 'bio')}
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.onSave(team.id)}
                        >
                            Save
                        </Button>
                    </div>
                )}
            </>
        );
    }
}

export default connect(mapStoreToProps)(EditTeam);