import actionTypes from './actionTypes';

export const getAllNotes = () => {
    return {
        type: actionTypes.getAllNotes,
        payload: {}
    }
}

// This only adds a new note at DOM-level
export const createNewNote = () => {
    return {
        type: actionTypes.createNewNote,
        payload: {}
    }
}

export const saveNote = note => {
    return {
        type: actionTypes.saveNote,
        payload: note
    }
};

export const updateNote = note => {
    return {
        type: actionTypes.updateNote,
        payload: note
    }
};

export const deleteNote = note => {
    return {
        type: actionTypes.deleteNote,
        payload: note
    }
};

export const shareNote = note => {
    return {
        type: actionTypes.shareNote,
        payload: note
    }
};

export const unshareNote = note => {
    return {
        type: actionTypes.unshareNote,
        payload: note
    }
};

export const viewSharedNote = note => {
    return {
        type: actionTypes.viewSharedNote,
        payload: note
    }
};