// let myMap = new Map();

// Adding key-value pairs to the map
// myMap.set('key1', 'value1');
// myMap.set('key2', 'value2');
// myMap.set(3, 'value3');
// myMap.set({ name: 'John' }, 'value4');

// console.log(myMap)


// let myMap2= new Map([[1,"shivani"],[true ,"candrive"],["age",29]])
// console.log(myMap2)
//  ------------------------------------------------------------------

// let info = {
//     firstName:"shivani",
//     lastName:"hedau",
//     age:23,
//     rollNo:250,
// }

// for (let i in info){
//     console.log(i , info[i])
// }

// -----------------------------------------------------------

let mapB = new Map(
    [
        [1,"admin"],
        [2,"customer"],
        [3,"manager"],
        [4,"support"],
        
    ]
)

console.log(mapB)

// mapB.clear()

// mapB.delete(1)


for(let key of mapB.keys()){
    console.log(key)
}

for(let value of mapB.values()){
    console.log(value)
}

for(let [k,v] of mapB.entries()){
    console.log(k , v)
}


mapB.forEach(function(x,y) {
    console.log(x,y)
});

mapB.set(5,"qa")
console.log(mapB)

console.log(mapB.get(5))

console.log(mapB.has(2))

console.log(mapB.size)

// -------------------------------

