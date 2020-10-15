import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET all Games
function* fetchGames(action) {
    let response = yield axios({
        method: 'GET',
        url: '/games'
    });

    yield put({
        type: 'SET_GAMES',
        payload: response.data
    });
} // end fetchGames

// Intake all Saga calls for Games
function* gamesSaga() {
    yield takeLatest('FETCH_GAMES', fetchGames);
} // end gamesSage
  
export default gamesSaga;