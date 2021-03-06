console.log("starting app");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require ('./notes.js');

const argv = yargs.argv;

var command = argv._[0];
console.log("command", command);
console.log("yargs", argv);


if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Note created");
        console.log("--");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    }
    else {
        console.log("Note title taken");
    }
} 
else if (command === "list") {
    var note = notes.getAll();
    console.log(note);
} 
else if (command === "read"){
    var note = notes.getNote(argv.title);
    if (note){
        console.log("Note found");
        console.log("--");
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);     
    }
    else {
        console.log("Note not found");
    }
} 
else if (command === "remove"){
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log (message);

} 
else {
    console.log("commnad not recognized");
}