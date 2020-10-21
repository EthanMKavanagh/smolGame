import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import mapStoreToProps from '../../redux/mapStoreToProps';

import EditSpecificPlayer from '../EditSpecificPlayer/EditSpecificPlayer';

class EditPlayer extends Component {
  render() {
    return (
      <>
        {this.props.store.individualPlayer.map(player =>
          <EditSpecificPlayer
            player={player}
            key={player.id}
          />
        )}
      </>
    );
  }
}

export default connect(mapStoreToProps)(withRouter(EditPlayer));