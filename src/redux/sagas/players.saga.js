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

// GET/:id player
function* fetchIndividualPlayer(action) {
    let response = yield axios({
        method: 'GET',
        url: `/players/${action.payload}`
    });

    yield put({
        type: 'SET_INDIVIDUAL_PLAYER',
        payload: response.data
    });
} // end fetchIndividualPlayer

// DELETE/:id player
function* deletePlayer(action) {
    yield axios({
        method: 'DELETE',
        url: `/players/${action.payload}`,
    });

    yield put({
        type: 'FETCH_PLAYERS'
    });
} // end deletePlayer

// Intake all Saga calls for Players
function* playersSaga() {
    yield takeLatest('FETCH_PLAYERS', fetchPlayers);
    yield takeLatest('CREATE_NEW_PLAYER', createNewPlayer);
    yield takeLatest('FETCH_INDIVIDUAL_PLAYER', fetchIndividualPlayer);
    yield takeLatest('DELETE_PLAYER', deletePlayer);
} // end playersSage
  
export default playersSaga;