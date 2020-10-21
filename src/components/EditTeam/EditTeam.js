import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import EditSpecificTeam from '../EditSpecificTeam/EditSpecificTeam';


class EditTeam extends Component {
    render() {
        return (
            <>
                {this.props.store.team.map(team =>
                    <EditSpecificTeam
                        team={team}
                        key={team.id}
                    />
                )}
            </>
        );
    }
}

export default connect(mapStoreToProps)(EditTeam);