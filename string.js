// String:-
// JavaScript, strings are immutable datatype, which means their content cannot be changed after they are created.
// and its store value by index


// 0 1 2 3 4
// H e l l o
let string = "Hello"
string[0] = "h"  //This will not change the first character to lowercase - immutable datatype
console.log(string)
// ---------------------------------------------------------------------------------

// 3 ways to defined string:-
let singleQuotestring ='this is a string defined with single quote'

let doubleQuotestring ="this is a string defined with double quote"

let backticks = `this is a string defined with backticks`

let name = "Anand"
let age = 28
let greeting = `Hello,my name is ${name} and i am ${age} year old`

console.log(greeting) 
// -------------------------------

// In JavaScript, a blank space is indeed considered as a string:-
// str1 = "Hello"
// str2 = "world"

// let combined = str1 + " " + str2
// console.log(combined)
// console.log(typeof combined)
// --------------------------------------------------------------

// toUpperCase() :-convert all characters into Upper case and return new string:-

// let mystring = "shivani"
// console.log(mystring.toUpperCase())

// ---------------------------------------------------------

// toLowerCase() :-convert all characters into Lower Case and return new string:-

// let mystring2 = "SHIVANI"
// console.log(mystring2.toLowerCase())
// ----------------------------------------------------------

// indexOf(searchvalue,startIndex):- it will return first matching index of given value

// let mystring3 = "SHIVANI"
// console.log(mystring3.indexOf("I"))   //output -> 2
// console.log(mystring3.indexOf("I",3)) // output -> 6
// console.log(mystring3.indexOf("Z"))   // output -> -1

// -------------------------------------------------------------

// includes():- it will check whether a string contains a specified substring.return boolean value

let str = "Ankur"
console.log(str.includes("k"))
console.log(str.includes("kur"))



// ---------------------------------------------------
// replace() :- it will replace the string into new string
let Mystr = "hi i am Shivani"
console.log(Mystr.replace('Shivani','Amol'))

// --------------------------------------------------------
// length :- The length property in JavaScript is used to get the length of a string,
//  which is the number of characters it contains.
let str2 = " Abhishek "
console.log(str2.length)

// trim() :- remove space from start and end of string -> return string
let trimstr = str2.trim()
console.log(trimstr.length)
// ---------------------------------------------------------

// trimStart() :- remove space from start of string only -> return string

let str3 = " Abhishek "

console.log(str3.length) //10
let trimstr2 = str3.trimStart()
console.log(trimstr2.length)

// ---------------------------------------------------------

// trimEnd() :- remove space from end of string only -> return string

let str4 = " Abhishek "
let trimstr3 = str3.trimEnd()
console.log(trimstr3.length)
console.log(trimstr3)

// ---------------------------------------------------------------------
// slice(startIndex,endIndex):- used to extract a section of a string
//  and return it as a new string.

let city = "Chandrapur"

console.log(city.slice(1,5))

// ---------------------------------------------------------------------
// startsWith() -> JavaScript is used to check if a string starts with a specified substring. 
// it will return boolean value

console.log(city.startsWith("C"))
console.log(city.startsWith("c"))
console.log(city.startsWith("Chandra"))

// --------------------------------------------------------------------

// endsWith() :- used to check if a string ends with a specified substring. 
// it will return boolean value

console.log(city.endsWith("pur"))
console.log(city.endsWith("r"))






