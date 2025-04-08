// 1. Variables to store my name, age, and nationality.
// Combine them into a sentence that introduces you.
let name = "Samuel";
let age = 32;
let nationality = "Nigerian";

let introduction =
  "Hello, my name is " +
  name +
  ". I am " +
  age +
  " years old and I am " +
  nationality +
  ".";
console.log(introduction);

// 2. Variable with your favorite quote or lyric.
// Change the entire text to uppercase and lowercase in separate steps.
let favoriteQuote =
  "The only limit to our realization of tomorrow is our doubts of today.";
console.log(favoriteQuote.toUpperCase()); // Uppercase
console.log(favoriteQuote.toLowerCase()); // Lowercase

// 3. Take a word and rearrange it in reverse order, then log the reversed word.
let word = "JavaScript";
let reversedWord = word.split("").reverse().join("");
console.log(reversedWord);

// 4. Store the price of 3 items in 3 different variables. Calculate the total and display it with a message.
let item1 = 150;
let item2 = 200;
let item3 = 100;

let total = item1 + item2 + item3;
console.log("The total price of all items is: ₦" + total);

// 5. The average of 5 test scores stored in variables. Display the average with a message.
let score1 = 85;
let score2 = 90;
let score3 = 78;
let score4 = 92;
let score5 = 88;

let average = (score1 + score2 + score3 + score4 + score5) / 5;
console.log("The average test score is: " + average);

// 6. An array of your 5 favorite foods. Display the first and last items in the array.
let favoriteFoods = ["Rice", "Pizza", "Pounded Yam", "Chicken", "Ice Cream"];
console.log("First food:", favoriteFoods[0]);
console.log("Last food:", favoriteFoods[favoriteFoods.length - 1]);

// 7. Adding two more food items to the list: one at the beginning and one at the end.
// Display the new list.
favoriteFoods.unshift("Suya"); // Add at the beginning
favoriteFoods.push("Boli"); // Add at the end
console.log("Updated food list:", favoriteFoods);

// 8. An array called jssOne with 10 student names.
let jssOne = [
  "Alice",
  "Ben",
  "Cynthia",
  "David",
  "Ella",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "John",
];

// 9. An array called jssTwo with 10 student names.
let jssTwo = [
  "Karen",
  "Leo",
  "Maria",
  "Nathan",
  "Olivia",
  "Paul",
  "Queen",
  "Ryan",
  "Sophia",
  "Tom",
];

// 10. An array called jssThree with 10 student names.
let jssThree = [
  "Uche",
  "Victor",
  "Wendy",
  "Xavier",
  "Yemi",
  "Zara",
  "Amaka",
  "Brian",
  "Chioma",
  "Daniel",
];
