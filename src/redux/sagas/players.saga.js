import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Get team
function* fetchPlayers() {
    let response = yield axios({
        method: 'GET',
        url: '/players'
    });

    yield put({
        type: 'SET_PLAYERS',
        payload: response.data
    });
}

function* playersSaga() {
    yield takeLatest('FETCH_PLAYERS', fetchPlayers);
}
  
export default playersSaga;