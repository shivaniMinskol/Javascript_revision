 // program 1

 var firsName = "Usha"
 var lastName = "Hedau"
 // console.log(window.firstName)
// console.log(window.lastName)

 // let Ramesh = {
 //     firsName:"Ramesh",
 //     lastName:"Hedau",
 //     displayName:function(){
 //         // this --- Ramesh
 //         console.log(this.firsName + this.lastName) // RameshHedau
 //         let displayName2 = function(){
 //             // this ---> window / normal function ka scope window ka hota hai
 //             console.log(this.firsName + this.lastName) // UshaHedau
 //         }
 //         displayName2()
 //     }
 // }
 // Ramesh.displayName()
//  ---------------------------------------------------------------------------------

 // program 3
 // let Pranay = {
 //     firsName:"Pranay",
 //     lastName:"Hedau",
 //     displayName:function(){
 //         // this --- Pranay
 //         console.log(this.firsName + this.lastName) // PranayHedau
            // arrow function ka scope uska immediate parent function ka hota hai
 //         let displayName2 = () =>{
 //             // this - Pranay
 //             console.log(this.firsName + this.lastName) // PranayHedau
 //         }
 //         displayName2()
 //     }
 // }
 // Pranay.displayName()
// ----------------------------------------------------------------------------------
// programe 4
 let  Shivani = {
     firsName:"Shivani",
     lastName:"Hedau",
        // arrow function scope shivani = window
     displayName:() => {
         // this --- window
         console.log(this.firsName + this.lastName) // UshaHedau - NAN
         let displayName2 = () =>{
             // this - window
             console.log(this.firsName + this.lastName) //UshaHedau NAN
             
         }
         displayName2()
     }
 }
 Shivani.displayName()
