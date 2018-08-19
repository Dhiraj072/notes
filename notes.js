const fs = require('fs');

const fetchNotes = () => {
    let notes = [];
    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch (e) {
        throw new Error("Unable to load notes from file");
    }
    return notes;
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
    } else {
        throw new Error("Cannot add note. Title already taken");
    }
}

const readNote = (title) => {
    let notes = fetchNotes();
    const matchingNotes = notes.filter((note) => note.title === title);
    if (matchingNotes.length > 0) {
        return matchingNotes[0];
    } else {
        throw new Error(`Unable to find note with title ${title}`);
    }
}

const removeNote = (title) => {
    const notes = fetchNotes();
    const updatedNotes = notes.filter((note) => note.title !== title);
    if (updatedNotes.length < notes.length) {
        saveNotes(updatedNotes);
    } else {
        throw new Error(`Can't find note with title ${title}`);
    }
}

module.exports = {
    addNote,
    fetchNotes,
    readNote,
    removeNote
};