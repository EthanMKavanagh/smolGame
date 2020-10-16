import React from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
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
        {this.props.store.team.map(team =>
          <div key={team.id}>
            <h1>We are the {team.name}</h1>
            <h3>Coach: {team.coach}</h3>
            <img src={team.image_url} alt='' />
            <p>Bio:</p>
            <p>{team.bio}</p>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onEditTeam}
            >
              Edit
            </Button>
          </div>
        )}
      </>
    )
  }
}

export default connect(mapStoreToProps)(withRouter(AboutPage));