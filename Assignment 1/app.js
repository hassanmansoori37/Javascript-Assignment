// Assignment 1: Javascript Basics

// 1.Display an Alert\ Create a simple web page that shows an alert box with a greeting message when
// the page loads.\ Topics: Alerts


alert("Welcome to my JavaScript Assignment!");

// 2.Declare and Use string varriables/Create two varriables with your first name and last name, 
// then display  them in an alert box using concatenation.\ Topics: Variables, Strings Concatenating
//  text strings


var fisrtName = "Hassan";
var lastName = "Mansoori";


alert("My name is " + fisrtName + " " + lastName);


// 3. Declare and Use Number Variables\ Declare a variable for your age and display a message like "I
// am 18 years old" using an alert.\ Topics: Variables for Numbers

var age = "18";
alert("I am " + age + " years old");


// 4.legal and Illegal Variable Names\ Write a JavaScript script that includes both legal and illegal
// variable names. Add comments to explain why the illegal names are incorrect.\ Topics: Variable
// Names Legal and Illegal


// legal varriable names
var userName = "Hassan";
var $price = 100;
var _score = 50;
var myVarriable123 = "Hello";


// illegal varriable names
// var 123name = "Invalid"; // Cannot start with a number
// var my-name = "Invalid"; // Hyphens are not allowed 
// var var = "Invalid"; // 'var' is a reserved keyword in JavaScript   

console.log(userName + " " + $price + " " + _score + " " + myVarriable123);