console.log("starting notes.js");

module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
}

module.exports.add = function (a, b) {
    return a + b;
}