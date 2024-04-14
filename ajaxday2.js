function getuser(pagenumb){
    fetch(`https://reqres.in/api/users?page= ${pagenumb}`)
    .then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response.data[0].id)
    })
}

function getUserById(id) {
    return fetch(`https://reqres.in/api/users/${id}`)
        .then(function (response) {
            return response.json()
        })
        .then(function (response) {
           // console.log(response.data)
           return response.data
        })

}

function renderHtml(el) {
    document.write(`<h1>${el.first_name}</h1>`)
    document.write(`<h1>${el.last_name}</h1>`)
    document.write(`<p>${el.email}</p>`)
    document.write(`<h1>${el.id}<h1>`)
    document.write(`<img src=${el.avatar}>`)

}
// getUserPage(1)
// .then(function(id){
//     return getUserById(id)
// })
// .then(function(obj){
//     //console.log(el)
//     renderHtml(obj)
// })

async function getUserInfo(pagenumb){
   let id =  await getuser(pagenumb)
   let user   = await getUserById(id)
   renderHtml(user)
}   

getUserInfo(2)