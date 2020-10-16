const teamReducer = (state = [], action) => {
    switch (action.type) {
        case ('SET_TEAM') :
            return action.payload;
        case ('SET_INDIVIDUAL_TEAM') :
            return action.payload;
        default :
            return state;
    }
}

export default teamReducer;