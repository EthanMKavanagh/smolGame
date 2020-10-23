import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {TextField, Button, Zoom, Paper, Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import mapStoreToProps from '../../redux/mapStoreToProps';

const styles = {
    Button: {
        backgroundColor: 'black',
        color: 'white',
        marginRight: '-100px'
    },
    TextField: {
        marginRight: '118px'
    }
}

class CreateTeam extends Component {

    state = {
        name: '',
        coach: '',
        image_url: '',
        bio: '',
        checked: true
    }

    onCreateTeam = () => {
        let objectToSend = {
            name: this.state.name,
            coach: this.state.coach,
            image_url: this.state.image_url,
            bio: this.state.bio
        }
        this.props.dispatch({
            type: 'CREATE_TEAM',
            payload: objectToSend
        });

        // this.props.dispatch({
        //     type: 'EDIT_USER',
        //     payload: ''
        // });

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
        const classes = this.props.classes
        return (
            <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
                <Paper 
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
                            className="img"
                        >
                            {this.state.image_url === '' ?
                                <img src="data:image/png;base64,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" alt=""/>:
                                <img src={this.state.image_url} alt="" />
                            }
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
                        spacing={0}
                    >
                        <Grid item>
                            <TextField
                                size="small"
                                id="outlined-basic"
                                label="Image URL" 
                                variant="outlined"
                                type="text"
                                className={classes.TextField}
                                value={this.state.image_url}
                                onChange={(event) => this.onChange(event, 'image_url')}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Button
                                variant="contained"
                                className={classes.Button}
                                onClick={() => this.onSave()}
                            >
                                Continue
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </Zoom>
        );
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(withRouter(CreateTeam)));