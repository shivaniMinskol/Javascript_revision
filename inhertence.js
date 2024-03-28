// inheritance - child class k reference variable pe parent class ki properties and methods access krna

// single-inheritece

// class parent{
//     constructor(fn,ln){
//         this.firstName = fn
//         this.lastName = ln
//     }

// }

// class child extends parent{
//     constructor(fn,ln,dn){
//         super(fn,ln)
//         this.daughterN = dn
//     }

//     displayname(){
//         console.log(`${this.daughterN} ${this.firstName}  ${this.lastName}`)
//     }

// }

// let obj = new child('Ramesh','Hedau','Shivani')
// obj.displayname()
// --------------------------------------------------------------------------------

// mutilevel inheritance

// class Grandparent {
//     constructor(gn, ln) {
//         this.GrandfatherN = gn
//         this.lastName = ln

//     }
// }

// class father extends Grandparent {
//     constructor(gn, ln, fn) {
//         super(gn, ln)
//         this.fathername = fn

//     }
// }

// class daughter extends father {
//     constructor(gn, ln, fn, dn) {
//         super(gn, ln, fn)
//         this.daughterName = dn
//     }

//     dispalyname() {
//         console.log(`${this.daughterName} ${this.fathername} ${this.GrandfatherN} ${this.lastName}`)
//     }
// }

// let obj2 = new daughter('Narayan', 'Hedau', 'Ramesh', 'Shivani')
// obj2.dispalyname()

// -------------------------------------------------------------------------------------------------
// Hirarchical

class father {
    constructor(fn, ln) {
        this.fatherName = fn
        this.lastName = ln
    }

}

class daughter extends father {
    constructor(fn, ln,dn) {
        super(fn,ln)
        this.daughterN = dn
    }

    displayDaughtyName(){
        console.log(`${this.daughterN} ${this.fatherName} ${this.lastName}`)
    }


}

class son extends father {
    constructor(fn, ln,sn) {
        super(fn,ln)
        this.sonName = sn
    }

    displaySonName(){
        console.log(`${this.sonName} ${this.fatherName} ${this.lastName}`)
    }

}

let obj3 = new daughter('Ramesh','Hedau','Shivani')
let obj4 = new son('Ramesh','Hedau','Pranay')

obj3.displayDaughtyName()
obj4.displaySonName()