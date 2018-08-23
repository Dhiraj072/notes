const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const command = yargs.argv._[0];
const argv = yargs
            .command('add', 'Add a new note', {
                title: {
                    describe: 'Title of the note',
                    demand: true,
                    alias: 't'
                },
                body: {
                    describe: 'Body of the note',
                    demand: true,
                    alias: 'b'
                }
            })
            .help()
            .argv;

if (command === 'add') {
    try {
        notes.addNote(argv.title, argv.body);
        console.log("Successfully added note");
    } catch (err) {
        console.log(err.message);
    }
} else if (command === 'list') {
    try {
        notes.logNotes(notes.fetchNotes());
    } catch (err) {
        console.log(err.message);
    }
} else if (command == 'read') {
    try {
        const note = notes.readNote(argv.title);
        notes.logNote(note);
    } catch(err) {
        console.log(err.message);
    }
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