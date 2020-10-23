import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Zoom} from '@material-ui/core';
import mapStoreToProps from '../../redux/mapStoreToProps';

import GameListItem from '../GameListItem/GameListItem';

class Games extends Component {

    state = {
        checked: true
    }

    componentDidMount = () => {
        this.getGames();
    }

    getGames = () => {
        this.props.dispatch({
            type: 'FETCH_GAMES'
        });
    }

    render() {
        return (
            //<Zoom in={this.state.checked}>
            <>
                {this.props.store.games.map(game =>
                    <>
                        <GameListItem
                            game={game}
                            key={game.id}
                        />
                    </>
                )}
            </>
            //</Zoom>
        );
    }
}

export default connect(mapStoreToProps)(Games);