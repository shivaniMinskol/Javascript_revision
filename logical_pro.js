li=["shivani","pranay","romi","omi","somi","shivani"]
uniqueLi=[]

for(let i = 0; i < li.length;i++ ){

    if (uniqueLi.indexOf(li[i]) === -1) {
        uniqueLi.push(li[i]);
    }

}

console.log(uniqueLi)
