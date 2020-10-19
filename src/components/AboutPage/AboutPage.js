import React from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import {Paper, Grid} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

class AboutPage extends React.Component {

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
      <>
        {/* Mapping through the team to render their information */}
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
                className="teamPic"
              >
                <img src={team.image_url} alt='' />
              </Grid>

              <Grid 
                item 
                xs={4}
              >
                <h1>{team.name}</h1>
                <h3>Coach: {team.coach}</h3>
                <p>{team.bio}</p>
                {/* Edit button for Team accessible to only Admins */}
                {this.props.store.user.authLevel === 'ADMIN' ?
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.onEditTeam}
                  >
                    Edit
                  </Button> :
                  <></>
                }
              </Grid>
            </Grid>
          </Paper>
        )}
      </>
    )
  }
}

export default connect(mapStoreToProps)(withRouter(AboutPage));