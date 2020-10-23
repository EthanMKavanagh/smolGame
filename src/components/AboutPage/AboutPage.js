import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Paper, Grid, IconButton, Zoom} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './AboutPage.css';

class AboutPage extends React.Component {

  state = {
    checked: true
  }

  componentDidMount = () => {
    this.getTeam();
  }

  getTeam = () => {
    this.props.dispatch({
      type: 'FETCH_TEAM'
    });
  }

  onEditTeam = () => {
    this.props.history.push(`/edit/team`);
  }
  
  render() {
    return (
      <Zoom in={this.state.checked} style={{ transitionDelay: this.state.checked ? '100ms' : '0ms' }}>
        {/* Mapping through the team to render their information */}
        <div>
        {this.props.store.team.map(team =>
          <Paper 
            elevation={3}
            key={team.id}
            className="aboutTeamPaper"
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
              </Grid>

              <Grid 
                item 
                xs={6}
              >
                <h1>{team.name}</h1>
                <h3>Coach: {team.coach}</h3>
                <p>{team.bio}</p>
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
                className="editAboutTeam"
              >
                {/* Edit button for Team accessible to only Admins */}
                {this.props.store.user.authLevel === 'ADMIN' ?
                  <IconButton onClick={this.onEditTeam}>
                    <EditIcon />
                  </IconButton> :
                  <></>
                }
              </Grid>
            </Grid>
          </Paper>
        )}
        </div>
      </Zoom>
    )
  }
}

export default connect(mapStoreToProps)(withRouter(AboutPage));