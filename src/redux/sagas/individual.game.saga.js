import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// PUT player
function* changeGame(action) {
    console.log('action.payload', action.payload);
    yield axios({
        method: 'PUT',
        url: `/individual/game/${action.payload.id}`,
        data: action.payload
    });

    yield put({
        type: 'FETCH_GAMES'
    });
} // end changeGame

// Intake all Saga calls for individualPlayers
function* individualGameSaga() {
    yield takeLatest('CHANGE_GAME', changeGame);
} // end playersSage
  
export default individualGameSaga;