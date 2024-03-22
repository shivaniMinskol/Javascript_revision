// program-1
// duplicate characters are not allowed return on unique value
// sets in JavaScript do not store values by index.

let s= new Set()

s.add(10)
s.add(20)
s.add(30)
s.add(40)
s.add(50)
s.add(50) // // Adding a duplicate value, which will be ignored since sets only store unique values

console.log(s)

// -------------------------------------------------------
// adding obj and array to a set:-
// let obj = { name: 'shivani', age: 29 }

// s.add(obj)
// console.log(s)

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]

// s.add(arr1)
// s.add(arr2)

// console.log(s)
// --------------------------------------------------------

// Converting Set to Array: You can convert a set to an array using the [spread operator ...] or by using [Array.from.]

// console.log(...s)
// console.log(typeof(s))

// -----------------------------------------------------------

let even_numb = s.forEach(function(el){
    if (el % 2 == 0) {
        console .log(el)
    }
       
})

// -------------------------------------------------

// for delete any element from set:-

s.delete(10)
console.log(s)

// ------------------------------------------------
// has() - boolean value return

console.log(s.has(10))

// -----------------------------------------------------
// size()- return number
// console.log(s.size); // Output: 4
// --------------------------------------------------------
