"use strict";
// Define array of places to visit
let placesToVisit = ["saudi", "dubai", "tazagram", "ialamabad", "lahore"];

// Print original array order
console.log("Original Order:", placesToVisit);

// Print array in alphabetical order without modifying the original list
console.log("Alphabetical Order:", [...placesToVisit].sort());

// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);

// Print array in reverse alphabetical order without modifying the original list
console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());


// Show that the original array is still in its original order
console.log("Original Order:", placesToVisit);


// Reverse the order of the list
placesToVisit.reverse();

console.log("Reversed Order:", placesToVisit);

// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();

console.log("Original Order:", placesToVisit);


// Sort the array in alphabetical order (modifies the original array)
placesToVisit.sort();

console.log("Sorted Alphabetical Order:", placesToVisit);

// Sort the array in reverse alphabetical order (modifies the original array)
placesToVisit.sort((a, b) => b.localeCompare(a));

console.log("Sorted Reverse Alphabetical Order:", placesToVisit);

