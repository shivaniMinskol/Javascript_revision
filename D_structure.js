
// program-1
// array store value by index
let li = ["shivani","sarika","dipanshu","vrushali","sayali","snehal"]

let [s1,s2,s3,,s5] = li

// console.log(s1)
// console.log(s2)
// console.log(s3)
// console.log(s5)
// -------------------------------------------------------

// program-2
// multi-dimensional array [[],[],[]]

let li2 = [["Pune","Nagpur"],["Hyderabad","Chennai"],["Bangalore","Mysore"],["Varanasi","Lucknow"]]

// let [[p1,n2],[h1,c1],[b1,m1],[v1,l1]]= li2

// console.log(p1)
// console.log(n2)
// console.log(v1)
// console.log(l1)
// console.log(h1)
// console.log(c1)
// console.log(b1)
// console.log(m1)

// ---------------------------------------------------------------------------------------

// program-3
// object store value by key-value pair

let li3 = [{firstName:"Shivani",lastName:"Hedau"},{firstName:"Pranay",lastName:"Hedau"}]

let [{firstName:sfname,lastName:slname},{firstName:pfname,lastName:plname}] = li3

console.log(`${sfname} ${slname}`)
console.log(`${pfname} ${plname}`)

// -----------------------------------------------------------------------------------------

// program-4

let states ={

    Maharashtra:["Mumbai","Pune","Nagpur","Nasik"],
    Chhattisgarh:"Bilaspur",
    Uttarpradesh:["lucknow","Prayagraj"],
    Rajasthan:["Udaipur","Jaipur","Jodhpur"]
}
    
let {Maharashtra:[m1,p1,n1,n2],Chhattisgarh:CH,Uttarpradesh:[l1,p2],Rajasthan:[u1,j1,j2]} = states
console.log(m1)
console.log(p1)
console.log(n1)
console.log(n2)
console.log(l1)
console.log(p2)
console.log(j1)
console.log(u1)
console.log(j1)
console.log(CH)



// ----------------------------------------------------------------------------------------------

// program-5

// let dataObject = {
//     numbers: [1, 2, 3, 4, 5],
//     isEven: true,
//     isPositive: false,
//     fruits: ["apple", "banana", "orange"],
//     age: 25,
//     temperatures: [20.5, 21, 22.5, 23.7],
//     hasPets: true
// };

// let {numbers:[n1,n2,n3,n4,n5],isEven,isPositive,fruits:[a1,b1,o1],age,temperatures:[h1,h2,h3,h4],hasPets} = dataObject

// console.log(hasPets)
// console.log(isEven)
// console.log(isEven)
// console.log(a1)
// console.log(n1)
// console.log(n2)
// console.log(n3)
// console.log(n4)
// console.log(n5)
// console.log(b1)
// console.log(h1)
// console.log(h2)
// console.log(o1)
// console.log(age)
// console.log(h3)
// console.log(h4)


