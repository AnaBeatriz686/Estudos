// Examples of integers.

console.log(3);
console.log(5);
console.log(-67);

// Examples of floating point numbers.

console.log(3.14);
console.log(7.2);
console.log(-14.5);

// Examples of string.

console.log("I love to code!");
console.log('I love to code!');

// Example of object.

const person = {
    name: "John",
    age: 30,
};

// Examples of variables.

let age;
console.log(age); // undefined

let age = 25;
console.log(age); // 25

let age = 25;
console.log(age); // 25
age = 30;
console.log(age); // 30

const maxScore = 100;
console.log(maxScore); // 100
maxScore = 200; // This will result in an error

const age; // Error: Missing initializer in const declaration

// Examples of string concatenation using the concat() method.

let str1 = 'Hello';
let str2 = 'World';

let result = str1.concat(' ', str2);
console.log(result); // Hello World

// Examples of string concatenation using template literals.

const name = "Alice";
const age = 25;
const message = "My name is " + name + " and I am " + age + " years old.";
console.log(message);

const name = "Alice";
const age = 25;
const message = `My name is ${name} and I am ${age} years old.`;
console.log(message);

// Examples of template literals with expressions.

const song = "Bohemian Rhapsody";
const score = 9.5;
const highestScore = 10;
const output = `One of my favorite songs is "${song}". I rated it ${(score / highestScore) * 100
    }%.`;
console.log(output);

// JavaScript is a dynamically typed language, which means that you don't have to specify the data type of a variable when you declare it. The data type is determined automatically based on the value assigned to the variable. For example:

let example = "Hello";
example = 42;

let data = 100;  // Initially a number
data = "New data";  // Dynamically changes to a string

// Examples of the typeof operator.

let num = 42;
console.log(typeof num); // "number"

let exampleVariable = null;
console.log(typeof exampleVariable); // "object"

// Example of the symbol data type.

const crypticKey1 = Symbol("saltNpepper");
const crypticKey2 = Symbol("saltNpepper");
console.log(crypticKey1 === crypticKey2); // false, because each symbol is unique

// Accessing characters of strings.

let greeting = "hello";
console.log(greeting[1]); // "e"

let greeting = "hello";
let firstTwo = greeting[0] + greeting[1]; // "he"
console.log(firstTwo);

// Locating substrings within strings.

let phrase = "The quick brown fox jumps over the lazy dog.";
console.log(phrase.indexOf("fox")); // 10
console.log(phrase.indexOf("dog")); // 35
console.log(phrase.indexOf("cat")); // -1 (not found)

// Example of the prompt() function.

let userInput = prompt("Please enter your name:");
console.log("Hello, " + userInput + "!");

// Example of the alert() function.

alert("This is an alert message!");

// Example of the confirm() function.

let userConfirmation = confirm("Do you want to proceed?");
if (userConfirmation) {
    console.log("User chose to proceed.");
} else {
    console.log("User canceled the action.");
}

/*  <button id="prompt-btn">Show Prompt</button>
    <p id="output"></p>
    <script src="index.js"></script> */

const btn = document.getElementById("prompt-btn");
const output = document.getElementById("output");
btn.addEventListener("click", () => {
    const userName = prompt("What is your name?", "Guest");
    output.textContent = "Hello, " + userName + "!";
});

// Exercise 1 - Build a Teacher ChatBot.

console.log("Hi there!");

const botName = "teacherBot";

const greeting = `My name is ${botName}.`;
console.log(greeting);

const subject = "JavaScript";
const topic = "strings";

const sentence = `Today, you will learn about ${topic} in ${subject}.`;
console.log(sentence);

const strLengthIntro = `Here is an example of using the length property on the word ${subject}.`;
console.log(strLengthIntro);

console.log(subject.length);

console.log(`Here is an example of using the length property on the word ${topic}.`);
console.log(topic.length);

console.log(`Here is an example of accessing the first letter in the word ${subject}.`);

console.log(subject[0]);

console.log(`Here is an example of accessing the second letter in the word ${subject}.`);
console.log(subject[1]);

console.log(`Here is an example of accessing the last letter in the word ${subject}.`);

const lastCharacter = subject[subject.length - 1];
console.log(lastCharacter);

const learningIsFunSentence = "Learning is fun.";

console.log("Here are examples of finding the positions of substrings in the sentence.");

console.log(learningIsFunSentence.indexOf("Learning"));

console.log(learningIsFunSentence.indexOf("fun"));
console.log(learningIsFunSentence.indexOf("learning"));

console.log("I hope you enjoyed learning today.");

// ASCII (American Standard Code for Information Interchange) is a character encoding standard that represents text in computers and other devices that use text. Each character is assigned a unique numerical value, known as its ASCII code.

let letter = "A";
console.log(letter.charCodeAt(0));  // 65

let char = String.fromCharCode(65);
console.log(char);  //  A

// String Search.

let phrase = "JavaScript is awesome!";
let result = phrase.includes("awesome");

console.log(result);  // true

let phrase = "JavaScript is awesome!";
let result = phrase.includes("Awesome"); // Case-sensitive 

console.log(result);  // false

let text = "Hello, JavaScript world!";
let result = text.includes("JavaScript", 7); // Start searching from index 7

console.log(result);  // true

// Slice method.

let message = "Hello, world!";
let greeting = message.slice(0, 5);

console.log(greeting);  // Hello

let message = "JavaScript is fun!";
let lastWord = message.slice(-4); // It counts from the end of the string

console.log(lastWord);  // fun!

// String formatting methods.

let greeting = "Hello, World!";
let uppercaseGreeting = greeting.toUpperCase();
console.log(uppercaseGreeting);  // "HELLO, WORLD!"

let shout = "I AM LEARNING JAVASCRIPT!";
let lowercaseShout = shout.toLowerCase();
console.log(lowercaseShout);  // "i am learning javascript!"

let message = "   Hello!   ";
console.log(message); // "   Hello!   "
let trimmedMessage = message.trim();
console.log(trimmedMessage);  // "Hello!"

let greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedStart = greeting.trimStart();
console.log(trimmedStart);  // "Hello!   "

let greeting = "   Hello!   ";
console.log(greeting);  // "   Hello!   "
let trimmedEnd = greeting.trimEnd();
console.log(trimmedEnd);  // "   Hello!"

// Exercise 2 - Build a String Formatter.

const userInput = "   Hello World!   ";
console.log("Original input:");
console.log(userInput);

const cleanedInput = userInput.trim();
console.log("Result of trimming whitespace from both ends:");
console.log(cleanedInput);

const trimmedStart = userInput.trimStart();
console.log("After using the trimStart() method, leading spaces removed:");
console.log(trimmedStart);

const trimmedEnd = userInput.trimEnd();
console.log("After using the trimEnd() method, trailing spaces removed:");
console.log(trimmedEnd);

const upperCaseInput = cleanedInput.toUpperCase();
console.log("Result of using the toUpperCase() method:");
console.log(upperCaseInput);

const lowerCaseInput = cleanedInput.toLowerCase();
console.log("Result of using the toLowerCase() method:");
console.log(lowerCaseInput);

const lowercaseWord = "camelcase";
const camelCasedVersion = lowercaseWord.slice(0, 5) + lowercaseWord[5].toUpperCase() + lowercaseWord.slice(-3);
console.log("Camel cased version:");
console.log(camelCasedVersion);

// String modification methods.

string.replace(searchValue, newValue);

let text = "I love JavaScript!";
console.log(text); // "I love JavaScript!"
let newText = text.replace("JavaScript", "coding");
console.log(newText);  // "I love coding!"

let sentence = "I enjoy working with JavaScript.";
console.log(sentence);  // "I enjoy working with JavaScript."
let updatedSentence = sentence.replace("javascript", "coding"); // Case sensitive.
console.log(updatedSentence);  // "I enjoy working with JavaScript."

let phrase = "Hello, world! Welcome to the world of coding.";
console.log(phrase);  // "Hello, world! Welcome to the world of coding."
let updatedPhrase = phrase.replace("world", "universe"); // Only replaces the first occurrence of the searchValue.
console.log(updatedPhrase);  // "Hello, universe! Welcome to the world of coding."

string.repeat(count);

let word = "Hello!";
let repeatedWord = word.repeat(3);
console.log(repeatedWord);  // "Hello!Hello!Hello!"

let word = "Test";
console.log(word.repeat(-1));  // Throws RangeError: Invalid count value

let word = "Test";
console.log(word.repeat(Infinity));  // Throws RangeError: Invalid count value

let word = "Test";
console.log(word.repeat(2.5));  // "TestTest"

let word = "Test";
console.log(word.repeat(0));  // ""

let count = 4;
let word = "Test";
let repeatedWord = word.repeat(count);
console.log(repeatedWord); // TestTestTestTest

// Numbers.

const wholeNumber = 50;
const decimalNumber = 4.5;
const negativeNumber = -7;

console.log(typeof wholeNumber); // number
console.log(typeof decimalNumber); // number
console.log(typeof negativeNumber); // number

const infiniteNumber = 1 / 0;
console.log(infiniteNumber); // Infinity
console.log(typeof infiniteNumber); // number

const notANumber = 'hello world' / 2;
console.log(notANumber); // NaN

const notANumber = 'hello world' / 2;
console.log(typeof notANumber); // number

// Arithmetic Operators.

const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 + num2;
const result2 = num2 + num1;
const result3 = num2 + num1 + num3;

console.log(result1); // 15
console.log(result2); // 15
console.log(result3); // 30

const difference = 10 - 5;
console.log(difference); // 5

const difference = 5 - 10;
console.log(difference); // -5

const num1 = 10;
const num2 = 5;
const result = num1 - num2;

console.log(result); // 5 

const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 * num2;
const result2 = num2 * num1;
const result3 = num2 * num1 * num3;

console.log(result1); // 50
console.log(result2); // 50
console.log(result3); // 750

const num1 = 10;
const num2 = 5;
const num3 = 15;

const result1 = num1 / num2;
const result2 = num2 / num1;
const result3 = num2 / num1 / num3;

console.log(result1); // 2
console.log(result2); // 0.5
console.log(result3); // 0.03333333333333333

const result = 10 / 0; 

console.log(result); // Infinity

const num1 = 10;
const num2 = 3;
const remainder = num1 % num2; // Remainder operator

console.log(remainder); // 1

const num1 = 2;
const num2 = 3;

const exponent = num1 ** num2; // Exponentiation operator
console.log(exponent); // 8