import React from 'react';
import { connect } from 'react-redux';
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

  render() {
    console.log('this.props.store.team', this.props.store.team);
    return (
      <>
        {this.props.store.team.map(team =>
          <div>
            <h1>We are the {team.name}</h1>
            <h3>Coach: {team.coach}</h3>
            <img src={team.image_url} alt='' />
            <p>Bio:</p>
            <p>{team.bio}</p>
          </div>
        )}
      </>
    )
  }
}

export default connect(mapStoreToProps)(AboutPage);