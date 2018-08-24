const yargs = require('yargs');
const notes = require('./notes');

const title = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
};
const body = {
    describe: 'Body of the note',
    demand: true,
    alias: 'b'
};
const command = yargs.argv._[0];
const argv = yargs
            .command('add', 'Add a new note', {
                title,
                body
            })
            .command('list', 'List all notes')
            .command('read', 'Read a note', {
                title
            })
            .command('remove', 'Remove a note', {
                title
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