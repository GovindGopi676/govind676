let numbers = [1, 2, 3, 4];

console.log(typeof(numbers))

numbers.forEach(function(num) {
  console.log(num * 2);
});
// Output: 2, 4, 6, 8


const input = "applee";

// Step 1: Split the string into words
const words = input.split("");

// Step 2: Create a word count object
const wordCount = {};

// Step 3: Use map() to populate word counts
words.map(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});

console.log(wordCount);


// const input = "hello world";

// // Step 1: Split the string into an array of characters
// const chars = input.split("");

// // Step 2: Create an empty object to store character counts
// const charCount = {};

// // Step 3: Use map() to update character counts
// chars.map(char => {
//   charCount[char] = (charCount[char] || 0) + 1;
// });

// console.log(charCount);

