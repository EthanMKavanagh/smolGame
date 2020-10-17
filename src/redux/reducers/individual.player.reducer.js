const individualPlayerReducer = (state = [], action) => {
    switch (action.type) {
        case ('SET_INDIVIDUAL_PLAYER') :
            return action.payload;
        default :
            return state;
    }
}

export default individualPlayerReducer;