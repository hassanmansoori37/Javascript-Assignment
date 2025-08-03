// Assignment 3: Arrays and Loops Level: Medium to Hard\ Estimated Time: 1 hour 30 minutes

// 1.Using Arrays\ Create an array of 5 fruits and display them using a loop.\ Topics: Arrays, for loops

// let fruits = ["Apple" , "Bannana" , "Orange" , "Mango" , "Grapes"];

// console.log("List of fruits");

// for(let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// 2.Modifying Arrays\ Add 2 fruits to the array, then remove 1. Display the final array using a loop.\
// Topics: Arrays: adding and removing elements

// let fruits = ["Apple" , "Bannana" , "Orange" , "Mango" , "Grapes"];
// fruits.push("Strawberry" , "Pineapple");
// fruits.pop();

// for(let i = 0; i < fruits .length; i++) {
//     console.log(fruits[i]);
// }

// console.log(fruits);



// 3.Insert, Remove, Slice\ Use splice() to insert a fruit at index 2, remove the third fruit, and slice
// the array to get the first 3 fruits. Print all operations.\ Topics: Arrays: removing, inserting, and extracting
// elements

// let fruits = ["Apple" , "Bannana" , "Orange" , "Mango" , "Grapes"];

// console.log("original array: " + fruits);
// fruits.splice(2, 0, "Strawberry");
// console.log("After inserting Strawberry at index 2: " + fruits);

// fruits.splice(2, 1);
// console.log("After removing the third fruit: " + fruits);

// let slicedFruits = fruits.slice(0, 3);
// console.log("Sliced array (first 3 fruits): " + slicedFruits);



 // 4.Loop Control\ Write a script that loops through an array of numbers. Break the loop when a number
 // greater than 50 is found. Print whether such a number exists.\ Topics: for loops: flags, Booleans, array
 // length, and breaks

// let numbers = [10, 22, 35, 48, 55, 60, 5, 12, 45, 70, 80, 90];
// let found = false;

// for(i = 0; i < numbers.length; i++) {
//     if(numbers[i] > 50) {
//         found = true;
//         console.log("Number greater than 50 found: " + numbers[i]);
//         break;
//     }
// }
// if(!found) {
//     console.log("No number greater than 50 found.");
// }


// 5. Nested Loops\ Create a multiplication table (1 to 10) using nested loops. Display results in the
// console or on the web page.\ Topics: for loops nested

console.log("Multiplication Table (1 to 10):");

for(let i = 1; i <= 10; i++) {
    let row = "";
    for(let j = 1; j <= 10; j++) {
        row += (i * j) + "\t";
}
console.log(row);
}