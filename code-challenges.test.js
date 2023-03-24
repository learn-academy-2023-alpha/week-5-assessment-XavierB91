// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

const { array, string } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// describe("greeter", () => {
//     it("returns a generic greeting", () => {
//       expect(greeter()).toEqual("Hello, LEARN student!")
//     })
//   })

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest
// Pseudocode tips :
// 1.Define your problem in English
// 2.Define a solution in English
// 3.Write your solution in pseudo-code
// 4.Translate your solution to JavaScript
// Plain English
// Our main goal into this step is to clarify everything. The more concrete and specific we can be, the better. Initially, it's a good idea to simply define everything, and then start stating facts about your definitions.

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// Pseudocode : What do I want to do ? : create a function.
//  What does this function do?/what is it's task ? : takes in a string(input) and returns a string(output), the returned string will be a coded message. I want to be able to convert letters to numbers, more specifically make convert vowels into numbers. create a function called vowelConverter() to replace all of the vowels  in a given string with numbers according to the following pattern
// "a" -> 4
// "e"-> 3
// "i"->1
// "o" -> 0
// since I want to replace the vowels with with numbers I can use the built-in Javascript method .replace. The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged. I'm going to call on a string and use the replace method and regular expression to replace the string vowels with numbers. Regular expressions are patterns used to match character combinations in strings. In JavaScript, regular expressions are also objects. These patterns are used with the exec() and test() methods of RegExp, and with the match(), matchAll(), replace(), replaceAll(), search(), and split() methods of String.A regular expression pattern is composed of simple characters, such as /abc/, or a combination of simple and special characters, such as /ab*c/ or /Chapter (\d+)\.\d*/.Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern /abc/ matches character combinations in strings only when the exact sequence "abc". I will use the pattern /a/ /e/ /i/ /o/ to replace the vowels in the variables with the corresponding numbers 

// a) Create a test with expect statements using the variables provided.


// describe("vowelConverter", () => {
//     it("takes in a string and returns a string with a coded message.", () => {
//       expect(vowelConverter(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//       expect(vowelConverter(secretCodeWord2)).toEqual( "G0bbl3dyg00k")
//       expect(vowelConverter(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
//   })
//  Testing output :  FAIL  ./code-challenges.test.js
//   vowelConverter
//   ✕ takes in a string and returns a string with a coded message. (2 ms)

// ● vowelConverter › takes in a string and returns a string with a coded message.

//   ReferenceError: vowelConverter is not defined

// b) Create the function that makes the test pass
//  (attempt 1 initial thought of using loop) 
// const vowelConverter = (str) => {
//     charArr = str.split('');
//     charArr.forEach(function (c, i) {
//       if (c === "a") {
//         charArr[i] = 4;
//       } else if (c === "e") {
//         charArr[i] = 3;
//       } else if (c === "i") {
//         charArr[i] = 1;
//       } else if (c === "o") {
//         charArr[i] = 0;
//       } else {
//         charArr[i] ;
//       }
//     });
//     return charArr.join('');
//   }





//(rough attempt 1 ) const vowelConverter = (str) => {
//     return str.replace (/\'a'/, "4")
// }



// (attempt 2) 
// const vowelsListing = {
//     a: 4,
//     e: 3,
//     i: 1,
//     o: 0 
// };


// (attempt 2) const vowelConverter = (str) => {
//     return str.replace(/["a","e","i","o"]/gi, (m)=> vowelsListing[m]);
// }
// (attempt 3) 
const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"
const vowelConverter = (str) => {

    return    str.replace (/a/gi, 4)
                .replace(/e/gi, 3)
                .replace(/i/gi, 1 )
                 .replace(/o/gi,0)
}
// Final Test Out put : 
// PASS  ./code-challenges.test.js
//   vowelConverter
//     ✓ takes in a string and returns a string with a coded message. (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.326 s, estimated 1 s



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
// Psuedocode: What do I want to do ? : create a function.
//  What does this function do?/what is it's task ? : takes in a array of words and a single letter (strings/input) and returns an array (output) of all the words containing that particular letter.  the returned array will be contain all of the words containing a particular letter.  How do I do this ?  I will create a function called fruityLetterFinder. This function will search through the array and pick up the all instances of e or a within the word. 

// a) Create a test with expects statement using the variable provided.
// My array of words
// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]
// describe("fruityLetterFinder", () => {
//         it("returns an array of all the words containing a particular letter", () => {
//           expect(fruityLetterFinder(letterA)).toEqual(["Mango", "Apricot", "Peach"])
//           expect(fruityLetterFinder(letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//         })
//       })
//     //   Test out put : 
    //   FAIL  ./code-challenges.test.js
    //   fruityLetterFinder
    //     ✕ returns an array of all the words containing a particular letter (1 ms)
    
    //   ● fruityLetterFinder › returns an array of all the words containing a particular letter
    
    //     ReferenceError: fruityLetterFinder is not defined
// b) Create the function that makes the test pass.
// const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

// const letterA = "a"
// // Expected output: ["Mango", "Apricot", "Peach"]
// const letterE = "e"
// // Expected output: ["Cherry", "Blueberry", "Peach"]


// (attempt1:😥 I feel like I'm super close to solving this problem but i'm unable to get Apricot for my expect output on letter a, perhaps I should use find or a sort type built-in method to allow me to me the conditions I want ?) const fruityLetterFinder = (...array) => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//     return fruitArray.filter(w => array.every(l => w.includes(l)));
//   }




// console.log(fruityLetterFinder(letterA)) [ 'Mango', 'Peach' ]
// console.log(fruityLetterFinder(letterE))  Expected output: ["Cherry", "Blueberry", "Peach"]

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
// Psuedocode: What do I want to do ? : create a function.
//  What does this function do?/what is it's task ? : takes in a array 5 numbers(input) and determines whether or not the array is a "full house"(boolean/output).  the returned output will be an true or false value.  How do I do this ?  I will create a function called isThisFullHouse. This function will 
// You can create an object which holds the count of each of the value. Ill iterate over the array using a for loop. 
// a) Create a test with expect statements using the variable provided.

describe("isThisFullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a full house", () => {
      expect(isThisFullHouse(hand1)).toEqual(true)
      expect(isThisFullHouse(hand2)).toEqual(false)
      expect(isThisFullHouse(hand3)).toEqual(false)
      expect(isThisFullHouse(hand4)).toEqual(true)
    })
//   })
//   Test Output
// // FAIL  ./code-challenges.test.js
// isThisFullHouse
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a full house

// ● isThisFullHouse › takes in an array of 5 numbers and determines whether or not the array is a full house

//   ReferenceError: isThisFullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

  


// b) Create the function that makes the test pass.
// To check full house
const isThisFullHouse = (arr) => {
    let countObj = {}
    for(let x of arr){
      countObj[x] = (countObj[x] || 0) + 1;
    }
    let vals = Object.values(countObj);
    if((vals[0] === 2 && vals[1] === 3) || (vals[1] === 2 && vals[0] === 3)){
      return true;
    }
    return false;
  }
//  final test output
//   PASS  ./code-challenges.test.js
//   isThisFullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a full house (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.57 s, estimated 1 s