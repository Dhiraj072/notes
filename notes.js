const fs = require('fs');

const addNote = (title, body) => {
    console.log('Adding note', title, body);
    let notes = [];
    try {
        notes = JSON.parse(fs.readFileSync('notes-data.json'));
    } catch(e) {
        console.log("Unable to load notes from file, using empty");
    }
    const duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push({
            title,
            body
        });
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    }
};

const getAll = () => {
    console.log("All notes");
}

const readNote = (title) => {
    console.log("Read", title);
}

const removeNote = (title) => {
    console.log("Remove", title);
}

module.exports = {
    addNote,
    getAll,
    readNote,
    removeNote
};