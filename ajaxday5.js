users = {
    "page": 2,
    "per_page": 6,
    "total": 12,
    "total_pages": 2,
    "data": [
        {
            "id": 7,
            "email": "michael.lawson@reqres.in",
            "first_name": "Michael",
            "last_name": "Lawson",
            "avatar": "https://reqres.in/img/faces/7-image.jpg"
        },
        {
            "id": 8,
            "email": "lindsay.ferguson@reqres.in",
            "first_name": "Lindsay",
            "last_name": "Ferguson",
            "avatar": "https://reqres.in/img/faces/8-image.jpg"
        },
        {
            "id": 9,
            "email": "tobias.funke@reqres.in",
            "first_name": "Tobias",
            "last_name": "Funke",
            "avatar": "https://reqres.in/img/faces/9-image.jpg"
        },
        {
            "id": 10,
            "email": "byron.fields@reqres.in",
            "first_name": "Byron",
            "last_name": "Fields",
            "avatar": "https://reqres.in/img/faces/10-image.jpg"
        },
        {
            "id": 11,
            "email": "george.edwards@reqres.in",
            "first_name": "George",
            "last_name": "Edwards",
            "avatar": "https://reqres.in/img/faces/11-image.jpg"
        },
        {
            "id": 12,
            "email": "rachel.howell@reqres.in",
            "first_name": "Rachel",
            "last_name": "Howell",
            "avatar": "https://reqres.in/img/faces/12-image.jpg"
        }
    ],
    "support": {
        "url": "https://reqres.in/#support-heading",
        "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
    }
}

users.data.forEach(element => {
    console.log(element.first_name)
    console.log(element.last_name)
    console.log(element.id)
    console.log(element.email)
    console.log(element.avatar)

document.write(`<h1>${element.first_name}<h1/>`)
document.write(`<h1>${element.last_name}<h1/>`)
document.write(`<h1>${element.id}<h1/>`)
document.write(`<h1>${element.email}<h1/>`)
document.write(`<img src =${element.avatar}>`)

})



// -----------------------------------------------------------------------------------

// function ListUsers(PageNumber){
//     fetch(`https://reqres.in/api/users?page${PageNumber}`)
//     . then(function(response){
//         return response.json()
//     })
//     .then(function(res){
//         console.log(res.data[0])
//     })
// }

// // ListUsers(2)

// function singleUser(id){
//     fetch(`https://reqres.in/api/users/${id}`)
//     .then(function(response){
//         return response.json()
//     })
//     .then(function(response){
//         return response.data[0]
    
//     })
// }

// singleUser(5)