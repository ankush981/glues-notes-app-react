import React from 'react';
import { connect } from 'react-redux';
import NoteListItem from './NoteListItem';
import { createNewNote } from '../redux';

function NotesList(props) {
    let notes = props.notes.map(note => {
        return <NoteListItem key={ note._id } note={ note }/>;
    });

    return (
        <div className='NotesList'>
            { notes }            
            <div className="NewNoteButton" onClick={ () => { props.newNote() }}>
                <p>Create new note</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        notes: state.notes.notes
    }
}
  
const mapDispatchToProps = dispatch => {
    return {
        newNote: () => dispatch(createNewNote())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);