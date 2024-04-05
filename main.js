"use strict";
// Define the show_magicians function
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
// Define the make_great function
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
let magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Call make_great function to modify the array
make_great(magicians);
// Call the show_magicians function to see the modified list
show_magicians(magicians);
