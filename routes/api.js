// Dependencies
const router = require('express').Router();
const save = require('../db/save');

// Gets saved notes
router.get('/notes', (req, res) => {
  save
    .returnNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((error) => res.status(500).json(error));
});

// Post for new note
router.post('/notes', (req, res) => {
  save
    .createNote(req.body)
    .then((note) => res.json(note))
    .catch((error) => res.status(500).json(error));
});

// Delete based on id
router.delete('/notes/:id', (req, res) => {
  save
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true }))
    .catch((error) => res.status(500).json(error));
});

module.exports = router;