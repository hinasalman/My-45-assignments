"use strict";
// Store the numbers 1 through 9 in an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (const num of numbers) {
    // Check if the number is 1, 2, or 3 to determine the proper ordinal ending
    let ordinalEnding;
    if (num === 1) {
        ordinalEnding = "st";
    }
    else if (num === 2) {
        ordinalEnding = "nd";
    }
    else if (num === 3) {
        ordinalEnding = "rd";
    }
    else {
        ordinalEnding = "th";
    }
    // Print the number with its ordinal ending
    console.log(`${num}${ordinalEnding}`);
}
