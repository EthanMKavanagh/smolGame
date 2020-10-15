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

// POST new Game
function* createNewGame(action) {
    yield axios({
        method: 'POST',
        url: '/games',
        data: action.payload
    });

    yield put({
        type: 'FETCH_GAMES'
    });
} // end createNewGame

// Intake all Saga calls for Games
function* gamesSaga() {
    yield takeLatest('FETCH_GAMES', fetchGames);
    yield takeLatest('CREATE_NEW_GAME', createNewGame);
} // end gamesSage
  
export default gamesSaga;