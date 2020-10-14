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
    return (
      <div>
        <h1>We are the {this.props.store.team.name}</h1>
        <h3>Coach: {this.props.store.team.coach}</h3>
        <img src={this.props.store.team.image_url} alt='' />
        <p>Bio:</p>
        <p>{this.props.store.team.bio}</p>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(AboutPage);