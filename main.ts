// Define types for different items
type Item = {
    name: string;
    category: string;
    price: number;
}

// Function to create an item object
function createItem(name: string, category: string, price: number): Item {
    return {
        name,
        category,
        price
    };
}

// Create some sample items
const item1: Item = createItem("Laptop", "Electronics", 999);
const item2: Item = createItem("Book", "Stationery", 20);
const item3: Item = createItem("T-shirt", "Clothing", 30);

// Display the created items
console.log("Item 1:", item1);
console.log("Item 2:", item2);
console.log("Item 3:", item3);
