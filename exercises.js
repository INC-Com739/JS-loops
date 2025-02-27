// JavaScript Loop Exercises - Super Easy Version

// 1️⃣ Print "Hello!" 3 Times
// Step 1: Use a for loop to repeat code a specific number of times.
// Step 2: Initialize a variable i to 0.
// Step 3: Set the condition to run while i is less than 3.
// Step 4: Increment i after each loop iteration.
let i = 0;
for (i = 0; i < 3; i++) {
    console.log("Hello!");
}


// 2️⃣ Print Numbers 1 to 5
// Step 1: Use a for loop to iterate through numbers.
// Step 2: Start with i = 1.
// Step 3: Run the loop while i is less than or equal to 5.
// Step 4: Increment i by 1 each time.
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
// 3️⃣ Print Even Numbers from 2 to 10
// Step 1: Use a for loop to iterate through numbers.
// Step 2: Start with i = 2.
// Step 3: Run the loop while i is less than or equal to 10.
// Step 4: Increment i by 2 each time to get even numbers.
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}

// 4️⃣ Countdown from 5 to 1
// Step 1: Use a while loop.
// Step 2: Initialize count at 5.
// Step 3: Set condition to run while count is greater than 0.
// Step 4: Decrease count by 1 after each loop iteration.
for (let i = 5; i >= 1; i--) {
    console.log(i);
}

// 5️⃣ Sum of Numbers 1 to 10
// Step 1: Use a for loop.
// Step 2: Initialize sum to 0.
// Step 3: Loop from 1 to 10, adding each number to sum.
// Step 4: Print the final sum value.
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);
// 55

// 6️⃣ Keep Asking Until Correct Answer
// Write a loop that keeps asking the user "What is 2 + 2?" until they enter "4".
//let answer = "";
// while (answer !== "4") {
    // answer = prompt("What is 2 + 2?");
// }
console.log("Correct!");

// 7️⃣ Multiplication Table of 2
// Print the multiplication table of 2 (1 to 5).
for (let i = 1; i <= 5; i++) {
    console.log(2 * i);
}

// 8️⃣ Reverse a Short Word
// Reverse the word "cat".
let word = "cat";
let reversed = "";
for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}
console.log(reversed);

// 9️⃣ Find the Factorial of 3
// Calculate the factorial of 3 (3! = 3 × 2 × 1 = 6).
let factorial = 1;
for (let i = 3; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
// 🔟 Roll a Dice Until You Get a 3
// Use a loop to keep rolling a dice (random number between 1-6) until you get a 3.
let diceRoll = 0;
while (diceRoll !== 3) {
    diceRoll = Math.floor(Math.random() * 6) + 1;
    console.log(diceRoll);
}
