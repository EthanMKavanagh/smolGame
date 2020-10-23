import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';
import {withStyles} from '@material-ui/core/styles';
import {Button, TextField, Paper, Grid, Zoom} from '@material-ui/core';
import './EditSpecificTeam.css';

const styles = {
    Button: {
        backgroundColor: 'black',
        color: 'white'
    }
}

class EditSpecificTeam extends Component {

    state = {
        name: this.props.team.name,
        coach: this.props.team.coach,
        image_url: this.props.team.image_url,
        bio: this.props.team.bio,
        checked: true
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

    onCancel = () => {
        this.props.history.push('/about');
    }

    render() {
        const classes = this.props.classes
        return (
            <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
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
                    justify="center"
                    alignItems="center"
                    className="bottomRow"
                    spacing={2}
                >
                    <Grid item xs={9} className="imageInput">
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
                    <Grid item className="cancelBtn">
                        <Button 
                            onClick={this.onCancel}
                            className={classes.Button}
                        >
                            Cancel
                        </Button>
                    </Grid>
                    <Grid item xs={1}>
                        <Button
                            variant="contained"
                            className={classes.Button}
                            onClick={() => this.onSave()}
                        >
                            Save
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            </Zoom>
        );
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(withRouter(EditSpecificTeam)));