
const addNote = (title, body) => {
    console.log('Adding note', title, body);
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