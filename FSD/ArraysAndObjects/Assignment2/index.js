// Item class representing an inventory item
class Item {
    constructor(id, name, quantity, price) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

// Function to add an item to the inventory
function addItem(inventory, item) {
    inventory.push(item);
    return inventory;
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
    const item = inventory.find(item => item.id === id);
    if (item) {
        Object.assign(item, newDetails);
    }
    return inventory;
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
    const index = inventory.findIndex(item => item.id === id);
    if (index !== -1) {
        inventory.splice(index, 1);
    }
    return inventory;
}

// Function to get an item from the inventory
function getItem(inventory, id) {
    return inventory.find(item => item.id === id);
}

// Function to print the inventory
function printInventory(inventory) {
    console.log("Inventory:");
    inventory.forEach(item => {
        console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`);
    });
}

// Main program 
function main() {
    // Initialize the inventory with some items
    let inventory = [
        new Item(1, 'Apple', 10, 0.5),
        new Item(2, 'Banana', 20, 0.2)
    ];

    console.log("Initial Inventory:");
    printInventory(inventory);

    // Add an item
    addItem(inventory, new Item(3, 'Orange', 15, 0.7));
    console.log("\nAfter Adding item:");
    printInventory(inventory);

    // Update an item
    updateItem(inventory, 2, { quantity: 30 });
    console.log("\nAfter Updating item:");
    printInventory(inventory);

    // Delete an item
    deleteItem(inventory, 1);
    console.log("\nAfter Deleting item:");
    printInventory(inventory);

    // Get a specific item
    const item = getItem(inventory, 3);
    console.log("\nGet item with ID 3:");
    console.log(`ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}, Price: ${item.price}`);
}

// Call the main function to demonstrate (by Lokireddy Chakridhar Reddy)
main();
