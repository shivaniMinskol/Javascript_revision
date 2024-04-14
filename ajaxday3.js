//  function usercreate(){
//     setTimeout(function(){
//         console.log('User Created')
//     },2000)
//  }

//  function getId(){
//     console.log('get ID')
//  }

//  usercreate()
//  getId()

//  ----------------------------------------------------------------

// class person{
//     constructor(fn,ln){
//         this.fn = fn
//         this.ln = ln
//     }
// }

// let obj = new person("shivani","Hedau")
// console.log(obj)
// console.log(obj.fn)
// console.log(obj.ln)
// ---------------------------------------------------------------
// async function
// function UserCreated(){
//     setTimeout(function(){
//         console.log('User Created')
//     },3000)
// }

// function getID(){
//     setTimeout(function(){
//         console.log('Get ID')
//     },2000)
// }

// function getInfo(){
//     setTimeout(function(){
//         console.log('Get INfo')
//     },1000)
// }

// UserCreated()
// getID()
// getInfo()
// ---------------------------------------------------------------------------------

// async function to syncronus by using call-back-hell to manage dependency
// tightly coupled, not reusable, not readable

// function UserCreated() {
//     setTimeout(function(){
//         console.log('User Created')
//         setTimeout(function(){
//             console.log('get Id')
//             setTimeout(function(){
//                 console.log('Get Info')
//             },1000);
//         },2000)
//     },3000)
// }

// UserCreated()

// -------------------------------------------------------------------------------------

// solution -  promises:-

// let pro = new Promise(function(resolve,reject){
//     a = 10
//     b = 20
//     if(a==b){
//         resolve('ok')
//     }
//     else{
//         reject('cancel')
//     }
// })

// pro.then(function(str){
//     console.log(str)
// })
// .catch(function(str){
//     console.log(str)
// })
// ----------------------------------------------------------------------------------------

function UserCreated(){
    return new Promise(function(resolve,reject){
            setTimeout(function(){
                resolve('User created')
            },3000)
    })
}

function GetId(){
    return new Promise(function(resolve,rejct){
        setTimeout(function(){
            resolve('Get Id')
        },2000)
    })
}

function GetInfo(){
    return new Promise(function(resovle,rejct){
        setTimeout(function(){
            resovle('get INFO')
        },1000)
    })
}

// UserCreated()
// .then(function(str){
//     console.log(str)
//     return GetId()
// })
// .then(function(str){
//     console.log(str)
//     return GetInfo()
// })
// .then(function(str){
//     console.log(str)
// })

async function UserDetails(){
    let UC =await UserCreated()
    console.log(UC)
    let GI = await GetId()
    console.log(GI)
    let GINFO = await GetInfo()
    console.log(GINFO)
}

UserDetails()