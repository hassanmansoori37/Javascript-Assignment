// Assignment 2: Working with Math and Conditions Level: Medium\ Estimated Time: 1 hour 15 minutes

// Simple Math Operations\ Create a calculator web page that can do addition, subtraction,
// multiplication, and division with two numbers using familiar operators.\ Topics: Math Expressions:
// familiar operators

// let num1 = +prompt("Enter your first Number");
// let num2 = +prompt("Enter your second Number");

// console.log("Addition: " + (num1 + num2));
// console.log("Subtraction: " + (num1 - num2));
// console.log("Multiplication: " + (num1 * num2));
// console.log("Division: " + (num1 / num2));


// Advanced Math Operators\ Add modulus (%) and increment/decrement operators to the calculator.
// Try pre- and post-increment. Display the result on the page.\ Topics: Math Expressions: unfamiliar
// operators

// let num = +prompt("Enter a number");

// console.log("Modulus: " + (num % 2)); // Modulus operator

//  let pre = num;
//  ++pre;
//  console.log("Pre-increment: " + pre); // Pre-increment operator

// let post = num;
// post++;
// console.log("Post-increment: " + post); // Post-increment operator


// 3.Operator Precedence\ Write 3 expressions that use multiple operators. Add parentheses to show
// how ambiguity is resolved.\ Topics: Math Expressions: eliminating ambiguity


// let a = 5 + 3 * 2;
// let b = (5 + 3) * 2;
// let c = 10 / 2 - 1 + 3 * 2;

// console.log("Expression a (5 + 3 * 2): " + a); // 11
// console.log("Expression b ((5 + 3) * 2): " + b); // 16
// console.log("Expression c (10 / 2 - 1 + 3 * 2): " + c); // 8


// 4.Prompt and Conditional Logic\ Ask the user for their age using a prompt. Show a different alert
// based on the user's age using if , else if , and else .\ Topics: Prompts, if statements,
// Comparison operators, if...else statements, else if statements


// let age = +prompt("Enter your age");

// if(age <= 13) {
//     alert("You are a child.");
// }
// else if(age <= 19) {
//     alert("You are a teenager.");
// }
// else {
//     alert("You are a senior citizen.");
// }

// 5.Nested Conditions\ Create a script that checks the temperature. If it’s below 10, print “Too cold”, if
// between 10–25, print “Just right”, and if above 25, print “Too hot”. Add another layer: if temperature
// is below 0, print “Freezing”.\ Topics: Testing sets of conditions, if statements nested

let temp = +prompt("Enter the temperature in Celsius");

if (temp < 0) {
    console.log("Freezing");
}
else if (temp <= 10) {
    console.log("Too cold");
} else if (temp <= 25) {
    console.log("Just right");
} else {
    console.log("Too hot");
}