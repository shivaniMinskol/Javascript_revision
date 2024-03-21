//single condition ==> ternary operator

let age = 29

age > 18? console.log('can drive'):console.log('cannot drive')

// -----------------------------------------------------------------

// in case of multiple condition

let name = "Shivani"

switch(name){
    case "Puja":
        console.log('hi i am Puja')

    case "Neha":
        console.log('hi i am Neha')

    case "Shivani":
        console.log("hi i am Shivani")
        break

    case "tilaksha":
        console.log('hi i am Tilaksha')

}
// -------------------------------------------------------------------------

let country ="UK"
switch (country) {
    case "France":
    case "Spain":
    case "Netherland":
        console.log("This coutry is in Europe")
        break
    case "UK":
    default:
        console.log('This county is not in Europe')
}
// ---------------------------------------------------------------------------


