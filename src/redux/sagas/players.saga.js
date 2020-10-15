import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET all the players
function* fetchPlayers(action) {
    let response = yield axios({
        method: 'GET',
        url: '/players'
    });

    yield put({
        type: 'SET_PLAYERS',
        payload: response.data
    });
} // end fetchPlayers

// POST new player
function* createNewPlayer(action) {
    yield axios({
        method: 'POST',
        url: '/players',
        data: action.payload
    });

    yield put({
        type: 'FETCH_PLAYERS'
    });
} // end createNewPlayer

// Intake all Saga calls for Players
function* playersSaga() {
    yield takeLatest('FETCH_PLAYERS', fetchPlayers);
    yield takeLatest('CREATE_NEW_PLAYER', createNewPlayer);
} // end playersSage
  
export default playersSaga;