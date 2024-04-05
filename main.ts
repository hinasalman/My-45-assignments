// Define the function to store information about a car
function create_car(manufacturer: string, model: string, ...extras: Record<string, any>[]): Record<string, any> {
    const car: Record<string, any> = {
        "manufacturer": manufacturer,
        "model": model
    };

    // Loop through the extras and add them to the car object
    for (const extra of extras) {
        const [key, value] = Object.entries(extra)[0];
        car[key] = value;
    }

    return car;
}

// Call the function with required information and additional name-value pairs
const myCar = create_car("corola", "pikanto", { "color": "red" }, { "year": 2024 });

// Print the object to make sure all the information was stored correctly
console.log(myCar);
