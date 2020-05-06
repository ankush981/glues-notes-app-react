import React from 'react';
import NotesList from './NotesList';
import NoteContentView from './NoteContentView';

function Dashboard() {
    return (
        <div className='Dashboard'>
            <NotesList/>
            <NoteContentView/>
        </div>
    );
}

export default Dashboard;