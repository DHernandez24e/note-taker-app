const fs = require('fs');
const path = require('path');

const createNewNote = (body, notesArray) => {
    const note = body;
    notesArray.push(note);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
};

const deleteNote = (id, notesArray) => {
    let updateNotes = notesArray;
    let indx = updateNotes.findIndex(notes => notes.id === id);

    updateNotes = updateNotes.splice(indx, 1);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: updateNotes }, null, 2)
    );
    return updateNotes;
};

module.exports = {
    createNewNote, 
    deleteNote
}