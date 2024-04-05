// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function
function make_great(magicians: string[]): string[] {
    const great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}

// Original array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];


// Create a copy of the array
const original_magicians: string[] = magicians.slice();

// Call make_great function with a copy of the array
const great_magicians: string[] = make_great(original_magicians);

// Call the show_magicians function to show original array
console.log("Original Magicians:");
show_magicians(original_magicians);

// Call the show_magicians function to show array with "the Great" added
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
