import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {Button, TextField, Paper, Grid} from '@material-ui/core';
import './EditSpecificTeam.css';

class EditSpecificTeam extends Component {

    state = {
        name: this.props.team.name,
        coach: this.props.team.coach,
        image_url: this.props.team.image_url,
        bio: this.props.team.bio
    }

    onSave = () => {
        this.props.dispatch({
            type: 'CHANGE_TEAM',
            payload: this.state
        });
        this.setState({
            name: this.props.team.name,
            coach: this.props.team.coach,
            image_url: this.props.team.image_url,
            bio: this.props.team.bio
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
            <Paper 
                key={this.props.team.id}
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
                        <img src={this.props.team.image_url} alt='' />
                    </Grid>

                    <Grid
                        item
                        xs={6}
                    >
                        <Grid
                            container
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Grid item>
                                <h1 className="label">Name:</h1>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="outlined-basic"
                                    label="Team Name" 
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
                                <h3 className="label">Coach:</h3>
                            </Grid>
                            <Grid item>
                                <TextField
                                    id="outlined-basic"
                                    label="Coach" 
                                    variant="outlined"
                                    type="text"
                                    size="small"
                                    value={this.state.coach}
                                    onChange={(event) => this.onChange(event, 'coach')}
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
                                <TextField 
                                    id="outlined-multiline-static"
                                    label="Bio"
                                    multiline
                                    rows={4}
                                    defaultValue="Default Value"
                                    variant="outlined"
                                    value={this.state.bio}
                                    onChange={(event) => this.onChange(event, 'bio')}
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
                    className="bottomRow"
                >
                    <Grid item xs={2} className="imageInput">
                        <TextField
                            size="small"
                            id="outlined-basic"
                            label="Image URL" 
                            variant="outlined"
                            type="text"
                            value={this.state.image_url}
                            onChange={(event) => this.onChange(event, 'image_url')}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        {/* TODO!!! */}
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Choose File
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
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
        );
    }
}

export default connect(mapStoreToProps)(withRouter(EditSpecificTeam));