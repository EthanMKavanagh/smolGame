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

// Intake all Saga calls for individualPlayers
function* playersSaga() {
    yield takeLatest('FETCH_INDIVIDUAL_PLAYER', fetchIndividualPlayer);
} // end playersSage
  
export default playersSaga;