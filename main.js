"use strict";
// Define the make_album function
function make_album(artist, title, tracks) {
    const album = {
        "artist": artist,
        "title": title
    };
    if (tracks !== undefined) {
        album["tracks"] = tracks;
    }
    return album;
}
// Call the function to create dictionaries representing different albums
const album1 = make_album("rose", "red");
const album2 = make_album("salman", "my hasband, my love,my life my whole world", 12); // Including number of tracks
const album3 = make_album("Ayesha ", "my elder,daughter");
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
