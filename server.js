const fs = require('fs');
const path = require('path');
const { notes } = require('./db/db.json');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const { createNewNote, deleteNote } = require('./lib/notes');
const { v4: uuidv4 } = require('uuid');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    let results = notes;
    return res.json(results);
});

app.post('/api/notes', (req, res) => {
    req.body.id = uuidv4();

    console.log(req.body);

    const note = createNewNote(req.body, notes);
    return res.json(note);
});

app.delete('/api/notes/:id', (req, res) => {

    let query = req.params.id;

    const test = deleteNote(query, notes);
    console.log(test);
    return res.json(test);
});

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}...`);
})