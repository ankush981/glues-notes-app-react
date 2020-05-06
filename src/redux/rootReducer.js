import { combineReducers } from 'redux';
import notesReducer from './notes/reducer';
import userReducer from './users/reducer';

const rootReducer = combineReducers({
    notes: notesReducer,
    user: userReducer
});

export default rootReducer;