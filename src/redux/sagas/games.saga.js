import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Get all Games
function* fetchGames() {
    let response = yield axios({
        method: 'GET',
        url: '/games'
    });

    yield put({
        type: 'SET_GAMES',
        payload: response.data
    });
}

function* gamesSaga() {
    yield takeLatest('FETCH_GAMES', fetchGames);
}
  
  export default gamesSaga;