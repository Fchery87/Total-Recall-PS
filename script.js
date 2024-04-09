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
