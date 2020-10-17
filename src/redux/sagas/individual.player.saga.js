import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET/:id player
function* fetchIndividualPlayer(action) {
    let response = yield axios({
        method: 'GET',
        url: `/individual/player/${action.payload}`
    });

    yield put({
        type: 'SET_INDIVIDUAL_PLAYER',
        payload: response.data
    });
} // end fetchIndividualPlayer

// PUT/:id player
function* changePlayer(action) {
    console.log(action.payload);
    yield axios({
        method: 'PUT',
        url: `/individual/player/${action.payload.id}`,
        data: action.payload
    });

    yield put({
        type: 'FETCH_PLAYERS'
    });
} // end changePlayer

// Intake all Saga calls for individualPlayers
function* playersSaga() {
    yield takeLatest('FETCH_INDIVIDUAL_PLAYER', fetchIndividualPlayer);
    yield takeLatest('CHANGE_PLAYER', changePlayer);
} // end playersSage
  
export default playersSaga;