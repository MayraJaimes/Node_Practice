console.log("starting app");

const fs = require('fs');
const _ = require('lodash');

const notes = require ('./notes.js');

var command = process.argv[2];
console.log("command", command);

if (command === "add") {
    console.log("adding new note");
} 
else if (command === "list") {
    console.log("listing all notes");  
} 
else if (command === "read"){
    console.log("reading notes");
}
else if (command ==="fetch"){
    console.log("fetch new note");
}
else {
    console.log("commnad not recognized");
}