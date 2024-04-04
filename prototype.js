
// let pranay = {
//     fn:"pranay",
//     ln:"hedau",
//     displayName:function(){
//         console.log(this.fn+this.ln)
//     }
// }
// console.log(pranay.fn)
// console.log(pranay.ln)
// amol.displayName()

// program 2

// function Person(fn,ln){
//     this.firstName = fn 
//     this.lastName = ln 
//     this.displayName = function(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// let pranay = new Person("pranay","hedau")
// let shiva = new Person("shivani","hedau")
// console.log(pranay)
// console.log(shiva)

// // amolA.displayName()
// // shiva.displayName()

// // program 3

// function Person(fn,ln){
//     this.firstName = fn 
//     this.lastName = ln 
// }

// let pranay = new Person("pranay","hedau")
// let shiva = new Person("shivani","hedau")
// console.log(pranay)
// console.log(shiva)
// // every object has one property __proto__ === Parent.protype

// console.log(pranay.__proto__ === Person.prototype)
// console.log(shiva.__proto__ === Person.prototype)

// Person.prototype.displayName  = function(){
//     console.log(this.firstName + this.lastName)
// }
// Person.prototype.country = "India"

// pranay.displayName()
// shiva.displayName()

// let names = ["chinmay","sarika","poorva"]
// console.log(names)
// names.pop()
// console.log(names.__proto__ === Array.prototype)

// // Array.prototype.chinmay = function(){
// //     console.log("hello chinmay !")
// // }
// // names.chinmay()

// console.log(names instanceof Array)
// console.log(amolA instanceof Person)
// console.log(shiva instanceof Person)

// let q = amolA.hasOwnProperty("firstName")
// let b  = amolA.hasOwnProperty("lastName")
// let a = amolA.hasOwnProperty("country")
// console.log(a)
// console.log(b)
// console.log(q)

// --------------------------------------------------------------

