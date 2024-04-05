"use strict";
// Define the function to create a sandwich
function make_sandwich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("No items selected for the sandwich.");
    }
    else {
        console.log("Items on the sandwich:");
        for (const item of items) {
            console.log("-${items[i]}");
        }
    }
    console.log("enjoy your sandwich Hina salman");
}
// Call the function three times with different number of arguments
make_sandwich("bread", "egg", "bowel,chicken");
make_sandwich("kitchup", "mayeonise");
make_sandwich("carrot", "cucumber");
