import React from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class InfoPage extends React.Component {

  render() {
    return (
      <div>
        <h1>We are the {this.props.store.team.name}</h1>
      </div>
    )
  }
}

export default connect(mapStoreToProps)(InfoPage);
