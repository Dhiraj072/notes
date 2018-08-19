const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const command = yargs.argv._[0];
const argv = yargs.argv;

if (command === 'add') {
    try {
        notes.addNote(argv.title, argv.body);
        console.log("Successfully added note");
    } catch (err) {
        console.log(err.message);
    }
} else if (command === 'list') {
    try {
        notes.fetchNotes()
    } catch (err) {
        console.log(err.message);
    }
} else if (command == 'read') {
    notes.readNote(argv.title);
} else if (command == 'remove') {
    try {
        notes.removeNote(argv.title);
        console.log(`Note ${argv.title} removed`);
    } catch (err) {
        console.log(err.message);
    }
} else {
    console.log("Unidentified command", command);
}