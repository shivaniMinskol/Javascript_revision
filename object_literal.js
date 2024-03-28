// object literal
// program- 1

let info = {
    firstName : "Shivani",
    lastName : "Hedau",
    age : 28
}

console.log(info)

// -----------------------------

// program- 2
class person{
    firstName = "Pranay"
    lastName = "hedau"
    age = 23
}

let obj2 = new person()

console.log(obj2)
console.log(obj2.firstName)
// --------------------------------------

// es6 class

class personB{
    constructor(fn,ln,ag){
        this.firstName = fn
        this.lastName = ln 
        this.age = ag
    }
    displayname(){
        console.log(this.firstName + this.lastName)

    }
}

let obj3 = new personB('Usha','Hedau',56)
let obj4 = new personB('Ramesh','Hedau',60)
console.log(obj3)
console.log(obj4)

// ------------------------------------------------------------------

// set and get method:

class details{
    setfirstname(fn){
        this.firstName = fn

    }

    getfirstname(){
        return this.firstName

    }

    setlastname(ln){
        this.lastName = ln

    }

    getlastname(){
       return this.lastName

    }
}

let obj5 = new details()

obj5.setfirstname('Aditya')
console.log(obj5)

obj5.setlastname('Raut')
console.log(obj5)

let q = obj5.getfirstname()
console.log(q)

let q1 = obj5.getlastname()
console.log(q1)
// ------------------------------------------------------------------------

// set and get Keyword

class Keyword{

    set firstName(fn){
        this.fname = fn
    }

    get firstName(){
        return this.fname
    }

    set lastName(ln){
        this.lname = ln

    }

    get lastName(){
        return this.lname
    } 
}

let obj6 = new Keyword()

obj6.fname = "Ranu"
obj6.lname = "Hedau"
console.log(obj6)

console.log(obj6.fname)
console.log(obj6.lname)