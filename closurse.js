//  Encapsulation:-
// lexical scope

// function Shivani(){
//     let a = 10
//     let b = 20
//     function Pranay(){
//         console.log(a+b)
//     }
//     Pranay()
// }
// Shivani()

// ----------------------------------------------

function Shivani(){
    let a = 10
    let b = 20
    return function Pranay(){
        console.log(a+b)
    }
    Pranay()
}
let obj = Shivani()
console.log(obj) // function return krega
obj() // function call -30 output
// -----------------------------------------------

// three types of function:-
// function declaration
// function expression
// arrow function

// function declaration

function person(){
    let a = 10
    let b = 5
    return (a + b)
}

let obj2 = person()
console.log(obj2)
// ---------------------------------------------
// function expression

let addition = function(){
    let x = 20
    let y = 10
    console.log(x+y)
}

addition()
// ----------------------------------------------

// arrow function
 
let additionB = (s,r)=>{
    console.log(s+r)
}
additionB(30,10)

// -----------------------------------------------
// arrow function

let additionC = (q,t)=> q + t
let obj3 = additionC(50,50)
console.log(obj3)

// -----------------------------------------------
