import actionTypes from './actionTypes';

const initialState = {
    username: null,
    password: null,
    authToken: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.login:
            break;
        case actionTypes.register:
            break;
        default:
            return state;
    }
}

export default reducer;