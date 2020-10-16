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

// PUT team
function* changeTeam(action) {
    yield axios({
        method: 'PUT',
        url: `/team/${action.payload}`,
        data: action.payload
    });

    yield put({
        type: 'FETCH_TEAM'
    });
} // end changeTeam

// Intake all Saga calls for Team
function* teamSaga() {
    yield takeLatest('FETCH_TEAM', fetchTeam);
    yield takeLatest('CHANGE_TEAM', changeTeam);
} // end teamSaga
  
export default teamSaga;