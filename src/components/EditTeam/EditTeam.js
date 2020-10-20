import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, TextField, Paper, Grid} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './EditTeam.css';

class EditTeam extends Component {

    state = {
        name: '',
        coach: '',
        image_url: '',
        bio: ''
    }

    onSave = () => {
        this.props.dispatch({
            type: 'CHANGE_TEAM',
            payload: this.state
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
                    <Paper 
                        key={team.id}
                        elevation={3}
                        className="editTeamPaper"
                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                            spacing={7}
                        >
                            <Grid 
                                item
                                xs={5}
                            >
                                <img src={team.image_url} alt='' />
                                {/* <TextField 
                                    id="outlined-basic"
                                    label="Image URL" 
                                    variant="outlined"
                                    type="text"
                                    placeholder={team.image_url}
                                    onChange={(event) => this.onChange(event, 'image_url')}
                                /> */}
                            </Grid>

                            <Grid
                                item
                                xs={6}
                            >
                                <h1>{team.name}</h1>
                                <TextField
                                    id="outlined-basic"
                                    label="Team Name" 
                                    variant="outlined"
                                    type="text"
                                    placeholder={team.name}
                                    onChange={(event) => this.onChange(event, 'name')}
                                />

                                <h3>Coach: {team.coach}</h3>
                                <TextField 
                                    id="outlined-basic"
                                    label="Coach" 
                                    variant="outlined"
                                    type="text"
                                    placeholder={team.coach}
                                    onChange={(event) => this.onChange(event, 'coach')}
                                />

                                <p>Bio: {team.bio}</p>
                                <TextField 
                                    id="outlined-basic"
                                    label="Boi" 
                                    variant="outlined"
                                    type="text"
                                    placeholder={team.bio}
                                    onChange={(event) => this.onChange(event, 'bio')}
                                />
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
                                xs={8}
                                className="imageFileSource"
                            >
                                {/* TODO!!! */}
                                <Button
                                    variant="contained"
                                    color="primary"
                                >
                                    Choose File
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={1}
                                className="saveEditTeam"
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => this.onSave()}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </Grid>
                    </Paper>
                )}
            </>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(EditTeam));