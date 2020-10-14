import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import GameListItem from '../GameListItem/GameListItem';

class Games extends Component {

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
            <div>
                {this.props.store.games.map(game =>
                    <>
                        <GameListItem
                            game={game}
                            key={game.id}
                        />
                    </>
                )}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Games);