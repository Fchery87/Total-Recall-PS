//! SECTION #1

//+ A. Variables

// Declare a new constant variable called myName and assign it your name?

// Declare a variable called favoriteLanguage and assign it the value of Python?

// Declare a new variable called newFavoriteLanguage and assign it JavaScript;

// Assign the value of newFavoriteLanguage to favoriteLanguage referencing each other.

// Finally log or print a message using a Literal String, make use of the variables myName and favoriteLanguage.

const myName = 'Frantz';
let favoriteLanguage = 'Python';
let newFavoriteLanguage = 'Javascript';
favoriteLanguage = newFavoriteLanguage;

console.log(
  `Hello, my name is ${myName} and my favorite programming language is ${favoriteLanguage}. `
);

//+ B. Strings
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariable in a new variable called secondVariable
// Change the value of secondVariable to any string.
// What is the value of firstVariable? Log it!
// Create a variable called yourName and set it equal to your name as a string.
//Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated. ex: Hello, my name is Jean Valjean

let firstVariable = 'Hello World';
firstVariable = 50;
let secondVariable = firstVariable;
secondVariable = 'Heartbreak Hotel';

console.log(' The value of firstVariable is:', firstVariable);

const yourName = 'Frantz';

let whatUp = 'Howdy, my name is ' + yourName;

console.log(whatUp);

//+ C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print true in the console.
// Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console:

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a <= b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a < b) === b < c; // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + a !== d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 !== '48');

//+ D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow." Commit

let animal = 'cow';

if (animal === 'cow') {
  console.log('mooooo');
} else {
  console.log("Hey! You're not a cow.");
}

//+ E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

let personAge = 16;

if (personAge >= 16) {
  console.log('Here are the keys!');
} else {
  console.log("Sorry, you're too young. Take a Hike!");
}

//! SECTION #3

//+ F. Biggie Smalls
// Create a variable that contains an integer.

// Write an if ... else statement that:
// console.log() "little number" if the number is entered is less than 100
// console.log()  big number if the number is greater than or equal to 100.

let number = 75;

if (number < 100) {
  console.log('little number');
} else {
  console.log('big number');
}

//+ G. Monkey in the Middle
// Write an if ... else if ... else statement:
// console.log() "little number" if the number entered is less than 5.
// If the number entered is more than 10, log "big number".
// Otherwise, log "monkey".

let digit = 7;

if (digit < 5) {
  console.log('little number');
} else if (digit > 10) {
  console.log('big number');
} else {
  console.log('monkey');
}

//! SECTION #2

//+ A. The basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// Loop to print numbers from 0 to 10
console.log(`Numbers from 0 to 10:`);
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Loop to print numbers from 10 to 400
console.log(`Numbers from 10 to 400:`);
for (let i = 10; i <= 400; i++) {
  console.log(i);
}

// Loop to print every third number starting with 12 and up to 4000
console.log(
  `Every third number starting with 12 and going no higher than 4000:`
);
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}

//+ B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "is an even number"

console.log(`Even numbers within the range of 1 to 100:`);
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is an even number');
  }
}

//+ C. Give me Five
// For the numbers 0 - 100, print out "I found a <number>. High five!" if the number is a multiple of five Example Output:

console.log('Give me Five:');
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i !== 0) {
    console.log('I found a ' + i + '. High five!');
  }
}

// Loop to print messages for numbers within the range of 0 to 100
console.log('Give me Five and Three:');
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i !== 0) {
    console.log('I found a ' + i + '. Three is a crowd');
  }
  if (i % 5 === 0 && i !== 0) {
    console.log('I found a ' + i + '. High five!');
  }
}

//+ D. Savings account
// Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// Save the sum of all numbers between 1 - 10 to a variable called bank_account
let bank_account = 0;
for (let i = 1; i <= 10; i++) {
  bank_account += i;
}

// Check work!
console.log('Bank Account (1 - 10): $' + bank_account);
// Expected output: Bank Account (1 - 10): $55

// Double the pay each week and save the sum of all numbers between 1 - 100 multiplied by 2
bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}

// Check your work!
console.log('Bank Account (1 - 100, doubled pay): $' + bank_account);
// Expected output: Bank Account (1 - 100, doubled pay): $10100

//! SECTION #3

//+ ===== A. Talk about it in your group:
// What are the things in an array called?
// Elements can be of any data type such as numbers, strings, objects, etc.

// Do Arrays guarantee those things will be in order? Yes, arrays in JavaScript maintain the order of elements.

// What real-life thing could you model with an array? Shoppinglist.

// example: let shoppingList = ["Apples", "Bananas", "Milk", "Bread", "Eggs"];
// console.log(shoppingList)

//+ ===== B. Easy Does It

const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
  "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
];

console.log(quotes);

//+ ===== C. Accessing elements

// Given the following array const randomThings = [1, 10, "Hello", true]
// How do you access the 1st element in the array?
// Change the value of "Hello"to "World"
// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();

const randomThings = [1, 10, 'Hello', true];

// Accessing the 1st element in the array
const firstElement = randomThings[0];

// Changing the value of "Hello" to "World"
randomThings[2] = 'World';

// Checking the value of the array to make sure it updated
console.log(randomThings);

//+ ===== D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// What would you write to access the 3rd element of the array?
// Change the value of "Github" to "Octocat"
// Add a new element, "Cloud City" to the array

const ourClass = ['Salty', 'Zoom', 'Sardine', 'Slack', 'Github'];

// Accessing the 3rd element of the array
const thirdElement = ourClass[2];

// Changing the value of "Github" to "Octocat"
ourClass[4] = 'Octocat';

// Adding a new element, "Cloud City", to the array
ourClass.push('Cloud City');

//+ ===== E. Mix It Up
// Given the following array: const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
// Add the string "Bob Marley"to the beginning of the array.
// Remove the string of your choice from the end of the array.
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?

const myArray = [5, 10, 500, 20];

// Add the string "Aegon" to the end of the array
myArray.push('Aegon');

// Add another string of your choice to the end of the array
myArray.push('Stark');

// Remove the 5 from the beginning of the array
myArray.shift();

// Add the string "Bob Marley" to the beginning of the array
myArray.unshift('Bob Marley');

// Remove the string of your choice from the end of the array
myArray.pop();

// Reverse this array using Array.prototype.reverse()
myArray.reverse();

// Did you mutate the array? What does mutate mean?
// Mutate means changing the original array directly. Yes, we mutated the array by using push, pop, shift, and unshift methods.

// Did the .reverse() method return anything?
// The reverse() method reverses the elements of the array in place and returns the reversed array.

//+ ===== H. What's in Your Closet?
// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
// In the same way, access one item from Thom's pants array.
// Access one item from Thom's accessories array.
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.

// Kristyn is wearing today
console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!');

// Kristyn just bought some sweet shades!
kristynsCloset.push('raybans');

// Kristyn spilled coffee on her hat...
kristynsCloset[5] = 'stained knit hat';

// Thom's outfit
const thomsOutfit = [
  thomsCloset[0][0], // Thom's shirt
  thomsCloset[1][0], // Thom's pants
  thomsCloset[2][1], // Thom's accessory
];

// Modify Thom's PJs
thomsCloset[1][2] = 'Footie Pajamas';

// Logging Thom's outfit
console.log(
  'Thom is looking fierce in a ' +
    thomsOutfit[0] +
    ', ' +
    thomsOutfit[1] +
    ', and ' +
    thomsOutfit[2] +
    '!'
);
