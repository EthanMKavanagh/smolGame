import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
                {this.props.game.map(game =>
                    <>
                        {/* <GameItem 
                            game={game}
                        /> */}
                    </>
                )}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(Games);