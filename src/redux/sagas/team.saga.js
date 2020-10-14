import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// Get team
function* fetchTeam() {
    let response = yield axios({
        method: 'GET',
        url: '/team'
    });

    yield put({
        type: 'SET_TEAM',
        payload: response.data
    });
}

function* teamSaga() {
    yield takeLatest('FETCH_TEAM', fetchTeam);
}
  
export default teamSaga;