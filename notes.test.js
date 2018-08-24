const notes = require('./notes');

// This will break 
test('should fetch notes correctly', () => {
    const result = notes.fetchNotes();
    expect(result).toBeInstanceOf(Array);
});