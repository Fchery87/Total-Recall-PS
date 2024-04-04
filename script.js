// 1. Variables & Data types

// A. Variables

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

// B. Strings
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

// C. Booleans
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
