// program 1
// function additionA(){
//     console.log("A is executed")
// }

// function additionB(){
//     console.log("B is executed")
// }

// additionB()
// additionA()

// program 2
// function additionA(){
//     setTimeout(function(){
//         console.log('A is executed')
//     },3000)
// }

// function additionB(){
//    console.log("B is executed")
// }
// additionA()
// additionB()

// program 3
//create user  ----->   get id ------> get info
function getInfo(){
    setTimeout(function(){
        console.log("user created")
    },3000)

    setTimeout(function(){
        console.log("get id")
    },2000)
    setTimeout(function(){
        console.log("get info")
    },1000)
}
//getInfo()

// program 4 ---- async code --- sync --call back hell
function getInfo(){
    setTimeout(function(){
        console.log("user created"),
        setTimeout(function(){
            console.log("get id")
            setTimeout(function(){
                console.log("get info")
            },1000)
        },2000)
    },3000)
}
getInfo()

// --------------------------------------------------------------
// day2

// function additionA(){
//     console.log('A')
// }

// function additionB(){
//     console.log('B')
// }

// additionB()
// additionA()


// program 2


// function additionC(){
//     setTimeout(function(){
//         console.log("C")
//     },3000)
// }

// function additionD(){
//     console.log("D")
// }

// additionC()
// additionD()

// Program 3

function getInfo() {

    setTimeout(function () {
        console.log("user created")
    }, 3000)


    setTimeout(function () {
        console.log("getId")
    }, 2000)

    setTimeout(function () {
        console.log("getInfo")
    }, 1000)
}

//getInfo()

// asyn sync ----- call back hell
// function getInfo() {
//     setTimeout(function () {
//         console.log("user created")
//         setTimeout(function () {
//             console.log("getId")
//             setTimeout(function () {
//                 console.log("getInfo")
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getInfo()

// Promises

// promises

// pending , resolve , reject 
// let pro = new Promise(function(resolve,reject){
//     let a = 10
//     let b = 10
//     if(a == b){
//         resolve("hello")
//     }
//     else {
//         reject("bye")
//     }
// })
// // consuming the promise
// pro.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })


// program 2

// let pro2 = new Promise(function(resolve,reject){
//     let cities = ["pune","bangalore","kolkata"]
//     if(cities.includes("Pune")){
//         resolve([11,22,33])
//     }
//     else {
//         reject([-11,-22,-33])
//     }
// })

// pro2
// .then(function(a){
//     console.log(a[0])
// })
// .catch(function(b){
//     console.log(b[0])
// })


// program 3

let pro3 = new Promise(function(resolve,reject){
    let c = [11,22,33]
    if(c.includes(333)){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro3
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})

//program 4

let pro4 = new Promise(function(resolve,reject){
    let a = 10
    let b = 10
    if(a == b){
        resolve("hello")
    }
    else {
        reject("bye")
    }
})

pro4
.then(function(str){
    console.log(str)
    return "hello2"
})
.then(function(str2){
    console.log(str2)
})
.catch(function(str){
    console.log(str)
})
.finally(function(){
    console.log("i will always execute")
})