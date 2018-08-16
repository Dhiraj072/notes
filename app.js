console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

const command = process.argv[2];
console.log('Command: ', command);

if (command === 'add') {
    // Add note
} else if (command === 'list') {
    // list notes
} else if (command == 'read') {
    // read
} else if (command == 'remove') {
    // remove note
} else {
    // Unknown
}