const { createNewNote, deleteNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const router = require('express').Router();

router.get('/notes', (req, res) => {
    let results = notes;
    return res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = uuidv4();

    console.log(req.body);

    const note = createNewNote(req.body, notes);
    return res.json(note);
});

router.delete('/notes/:id', (req, res) => {

    let query = req.params.id;

    const test = deleteNote(query, notes);
    console.log(test);
    return res.json(test);
});

module.exports = router;