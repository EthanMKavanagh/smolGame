import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// GET team
function* fetchTeam() {
    let response = yield axios({
        method: 'GET',
        url: '/team'
    });

    yield put({
        type: 'SET_TEAM',
        payload: response.data
    });
} // end fetchTeam

// Intake all Saga calls for Team
function* teamSaga() {
    yield takeLatest('FETCH_TEAM', fetchTeam);
} // end teamSaga
  
export default teamSaga;