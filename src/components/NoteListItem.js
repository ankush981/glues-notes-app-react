import React from 'react';
import { getFriendlyDateFormat } from '../utils';

function NoteListItem(props) {
    return (
        <div className='NoteListItem'>
            
            <p className="NoteTitle"> { props.note.title } </p>
            <p className="NoteTimestamp"> { getFriendlyDateFormat(props.note.createdAt) } </p>
        </div>
    );
}

export default NoteListItem;