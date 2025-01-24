// 1. Create User Objects
const users = [
    {
        name: 'Chakri',
        age: 20,
        hobbies: ['Reading', 'Traveling', 'Swimming']
    },
    {
        name: 'Princi',
        age: 20,
        hobbies: ['Gaming', 'Cooking', 'Cycling']
    },
    {
        name: 'Chotu',
        age: 21,
        hobbies: ['Photography', 'Music', 'Running']
    }
];

// 2. Destructure Properties and Display in Console
users.forEach(user => {
    const { name, age } = user;
    console.log(`Name: ${name}, Age: ${age}`);
});

// 3. Use Spread Operator to Combine Hobbies Arrays
const allHobbies = [...users[0].hobbies, ...users[1].hobbies, ...users[2].hobbies];

// Display Combined Hobbies Array in Console
console.log('Combined Hobbies:', allHobbies);
