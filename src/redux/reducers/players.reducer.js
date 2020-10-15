const playersReducer = (state = [], action) => {
    switch (action.type) {
        case ('SET_PLAYERS') :
            return action.payload;
        case ('SET_INDIVIDUAL_PLAYER') :
            return action.payload;
        default :
            return state;
    }
}

export default playersReducer;