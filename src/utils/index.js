const moment = require('moment');

// convert ISO timestamp to something less soul-destroying
export function getFriendlyDateFormat(timestamp) {
    // e.g., May 12, 7:30 PM
    return moment(timestamp).format('MMM D, h:mm A');
}

export function getBlankNote() {
    return {
        _id: 1, // blank notes have temporary _id '1' to function as list rendering key
        title: 'New note',
        body: 'New note',
        isNew: true,
        createdAt: moment().toISOString()
    }
};