// Store the person's name in a variable
let personName: string = "Salman khan";

// Print the person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());

// Print the person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());

// Print the person's name in titlecase
console.log("Titlecase:",(personName));

// Function to convert a string to titlecase
console.log("titlecase:",  personName.replace(/\b\w/g, c => c.toUpperCase()));

