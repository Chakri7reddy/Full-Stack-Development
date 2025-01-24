// Initialize the array with a set of numbers
let numbers = [5, 3, 8, 1, 2];

// Function to add a number to the array
function addNumber(array, number) {
    array.push(number);
    return array;
}

// Function to remove the first occurrence of a number from the array
function removeNumber(array, number) {
    const index = array.indexOf(number);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

// Function to sort the numbers in ascending order
function sortNumbers(array) {
    return array.slice().sort((a, b) => a - b);
}

// Function to calculate the sum of the numbers in the array
function calculateSum(array) {
    return array.reduce((sum, num) => sum + num, 0);
}

// Function to calculate the average of the numbers in the array
function calculateAverage(array) {
    if (array.length === 0) {
        return 0;
    }
    return calculateSum(array) / array.length;
}

// Main program to demonstrate the use of each function
function main() {
    console.log("Original array:", numbers);

    // Add a number
    numbers = addNumber(numbers, 10);
    console.log("After adding 10:", numbers);

    // Remove a number
    numbers = removeNumber(numbers, 3);
    console.log("After removing 3:", numbers);

    // Sort the numbers
    const sortedNumbers = sortNumbers(numbers);
    console.log("Sorted array:", sortedNumbers);

    // Calculate sum
    const totalSum = calculateSum(numbers);
    console.log("Sum of numbers:", totalSum);

    // Calculate average
    const average = calculateAverage(numbers);
    console.log("Average of numbers:", average);
}

// Call the main function to demonstrate (by Lokireddy Chakridhar reddy)
main();
