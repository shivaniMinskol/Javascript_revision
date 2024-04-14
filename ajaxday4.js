

// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//     },3000)

//     setTimeout(function(){
//         console.log("getId")
//     },2000)

//     setTimeout(function(){
//         console.log("user Info")
//     },1000)

// }
// getInfo()



// function getInfo(){
//     setTimeout(function(){
//         console.log("user created")
//         setTimeout(function(){
//             console.log("getId")
//             setTimeout(function(){
//                 console.log("user Info")
//             },1000)
//         },2000)
//     },3000)
// }
// getInfo()


function userCreated() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("user created")
        }, 3000)

    })
}

function userId() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("Get ID")
        },2000)

    })
}

function userInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve("getinfo")
        }, 1000)

    })
}
// userCreated()
// .then(function(str){
//     console.log(str)
//     return userId()
// })
// .then(function(str){
//     console.log(str)
//     return userInfo()
// })
// .then(function(str){
//     console.log(str)
// })

// async await 

// async function userInfoB(){
//     let a = await userCreated()
//     console.log(a)
//     let b = await userId()
//     console.log(b)
//     let c = await userInfo()
//     console.log(c)
// }
// userInfoB()

// async code -------- sync 
// user create  ----- get id ------- get info

// call     ---- 2
// callB    -----2
// callC    -----2

// promise  ---- promise combinations -- 4 methods 

//promise.race()
//proimse.any()
//promise.allSettled()
//promise.all()


// Promise.all([
//     Promise.resolve("hello") ,
//     Promise.resolve("bye") ,
//     Promise.reject("hello c") 
// ])
// .then(function(arr){
//     console.log(arr)
// })
// .catch(function(){
//     console.log("all not resolved")
// })


// program 2
// Promise.allSettled([
//     Promise.resolve("hello") ,
//     Promise.resolve("bye") ,
//     Promise.reject("hello c")  
// ])
// .then(function(arr){
//     console.log(arr)
// })

// Promise.race()

function proOne(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("hello")
        },3000)
    })
}

function proTwo(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            reject("bye")
        },2000)
    })
}
Promise.race([
    proOne(),
    proTwo()
])
.then(function(str){
    console.log(str)
})
.catch(function(str){
    console.log(str)
})

// Promise.any()


Promise.any([
    Promise.reject("bye"),
    Promise.reject("bye2"),
    Promise.reject("bye3"),
])