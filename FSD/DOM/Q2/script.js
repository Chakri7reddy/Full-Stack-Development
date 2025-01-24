document.addEventListener('DOMContentLoaded', () => {
    const addItemButton = document.getElementById('add-item');
    const itemNameInput = document.getElementById('item-name');
    const itemQuantityInput = document.getElementById('item-quantity');
    const shoppingList = document.getElementById('shopping-list');

    // Function to add a new item to the list
    function addItem() {
        const name = itemNameInput.value.trim();
        const quantity = itemQuantityInput.value.trim();

        if (name && quantity) {
            const listItem = document.createElement('li');
            listItem.className = 'shopping-list-item';

            listItem.innerHTML = `
                <span>${name} (${quantity})</span>
                <button class="edit-button">Edit</button>
                <button class="remove-button">Remove</button>
            `;

            shoppingList.appendChild(listItem);

            itemNameInput.value = '';
            itemQuantityInput.value = '';

            // Add event listeners to the new buttons
            listItem.querySelector('.edit-button').addEventListener('click', () => editItem(listItem));
            listItem.querySelector('.remove-button').addEventListener('click', () => removeItem(listItem));
        } else {
            alert('Please enter both item name and quantity.');
        }
    }

    // Function to edit an item
    function editItem(listItem) {
        const currentText = listItem.querySelector('span').textContent;
        const [name, quantity] = currentText.split(' (');
        const newName = prompt('Enter new item name:', name);
        const newQuantity = prompt('Enter new quantity:', quantity.replace(')', ''));

        if (newName && newQuantity) {
            listItem.querySelector('span').textContent = `${newName} (${newQuantity})`;
        }
    }

    // Function to remove an item
    function removeItem(listItem) {
        shoppingList.removeChild(listItem);
    }

    // Event listener for the "Add Item" button
    addItemButton.addEventListener('click', addItem);
});
//By Lokireddy Chakri dhar Reddy