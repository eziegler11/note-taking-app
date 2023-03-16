// Required Dependencies
const util = require('util');
const fs = require('fs');
const uuidv1 = require('uuid/v1');

// Ability to read and write to the directory
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

// Class for saving a note
class Save {
  read() {
    return readFile('db/db.json', 'utf8');
  }

  write(note) {
    return writeFile('db/db.json', JSON.stringify(note));
  }

// Deletes a note based on id
    deleteNote(id) {
        return this.returnNotes()
        .then((notes) => notes.filter((note) => note.id !== id))
        .then((filteredNotes) => this.write(filteredNotes));
  }

// Reads from db.json file
  returnNotes() {
    return this.read().then((notes) => {
      let readNotes;
      try {
        readNotes = [].concat(JSON.parse(notes));
      } catch (err) {
        readNotes = [];
      }

      return readNotes;
    });
  }

// Require text to create a new note
  createNote(note) {
    const { title, text } = note;
    if (!title || !text) {
      throw new Error("You must insert text");
    }

// Unique ID added
    const newNote = { title, text, id: uuidv1() };

// Write the updated notes and return them
    return this.returnNotes()
      .then((notes) => [...notes, newNote])
      .then((updatedNotes) => this.write(updatedNotes))
      .then(() => newNote);
  }
}

module.exports = new Save();
