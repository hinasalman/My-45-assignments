// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
const magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

// Call the function and pass the array
show_magicians(magicians);
