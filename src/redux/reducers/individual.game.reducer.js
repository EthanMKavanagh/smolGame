const individualGame = (state = {}, action) => {
    switch (action.type) {
        case 'SET_INDIVIDUAL_GAME' :
            return action.payload;
        default :
            return state;
    }
}

export default individualGame;