// Define an array of countries
const countries: string[] = ["dubai", "oman", "UK", "Australia", "France", "Japan", "Brazil", "India", "China"];

// Print the list of countries
console.log("List of countries:");
countries.forEach((country, index) => {
    console.log(`${index + 1}. ${country}`);
});
