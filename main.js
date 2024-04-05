"use strict";
// Define the make_shirt function with default values
function make_shirt(size = "large", message = "I love TypeScript") {
    console.log(`Shirt size: ${size.toUpperCase()}`);
    console.log(`Message: ${message}`);
}
// Call the function to make a large shirt with the default message
make_shirt();
// Call the function to make a medium shirt with the default message
make_shirt("medium");
// Call the function to make a shirt of any size with a different message
make_shirt("small", "Hello, World!");
