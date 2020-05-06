import actionTypes from './actionTypes';

const login = (user) => {
    return {
        type: actionTypes.login,
        payload: user
    }
}

const register = (user) => {
    return {
        type: actionTypes.register,
        payload: user
    }
}

const logout = (user) => {
    return {
        type: actionTypes.logout,
        payload: user
    }
}

module.exports = {
    login,
    register,
    logout
};