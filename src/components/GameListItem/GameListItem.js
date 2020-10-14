import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

class GameListItem extends Component {


    render() {
        return (
            <div>
                <h1>{this.props.game.name}</h1>
                { this.props.game.isWin ?
                    <h1>Win</h1> :
                    <h1>Loss</h1>
                }
                <h1>{this.props.game.score}</h1>
                <h3>Touchdowns: {this.props.game.touchdowns}</h3>
                <h3>Field Goals: {this.props.game.field_goals}</h3>
                <h3>Interceptions: {this.props.game.interceptions}</h3>
                <h3>Total Rushing Yards: {this.props.game.rushing_yards}</h3>
                <h3>Total Passing Yards: {this.props.game.passing_yards}</h3>
                <h3>Total Receiving Yards: {this.props.game.receiving_yards}</h3>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(GameListItem);