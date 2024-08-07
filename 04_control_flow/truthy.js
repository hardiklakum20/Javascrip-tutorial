// const userEmail = "h@hardik.ai"

// if (userEmail) {
//     console.log("Got user email");    
// }else{
//     console.log("Don't have user email");    
// }

// falsy value 
    //false, 0 , -0, bigInt 0n, "", null, undefiend, Nan

//truthy value
    //[], "0", 'false', " ", {}, function(){}


const userEmail = []

// if (userEmail.length === 0) {
//     console.log("Array is Empty");    
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");    
}

//Nullish coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);



//Terniary Operation

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log(" more than 80");




