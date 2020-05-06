import actionTypes from './actionTypes';
import { getBlankNote } from './../../utils';
const deepcopy = require('deepcopy'); // Quick-and-dirty immutable state updates!

const initialState = {
    notes: [
        {
            _id: '003434f445f',
            title: 'Class notes',
            body: 'This is a simple class note',
            createdAt: '2020-03-06T07:20:13.768Z',
        },
        {
            _id: '003434f4444',
            title: 'Gym notes',
            body: 'This is a simple gym note',
            createdAt: '2020-04-06T07:22:13.768Z',
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.createNewNote:
            const newNote = state.notes.filter(note => note.isNew);
            // only one blank note allowed
            if(!newNote.length) {
                let newState = deepcopy(state);
                newState.notes.push(getBlankNote());
                newState.notes = sortNotes(newState.notes);
                return newState;
            } else {
                return state;
            }
        default:
            return state;
    }
}

// To-do: Sort not working as expected
function sortNotes(notes) {
    return notes.sort((note1, note2) => {
        if(note1.createdAt > note2.createdAt) {
            return 1;
        } else if (note1.createdAt < note2.createdAt) {
            return -1;
        }
        return 0;
    });
}

export default reducer;