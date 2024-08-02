
function sayMyName(){
    console.log("h");
    console.log("a");
    console.log("r");
    console.log("d");
    console.log("i");
    console.log("k");
}
// sayMyName()



// function addTwoNumbers(number1, number2){  //(number1, number2) are perameters
//     console.log(number1 + number2);
// }
// addTwoNumbers(10,27);


function addTwoNumbers(number1, number2){  //(number1, number2) are perameters
    //  let results = number1 + number2
    //  return results
    return number1 + number2
}
const results = addTwoNumbers(10,5) // (10,27) are arguments
// console.log("Results:", results);



function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("Please Enter a Username"); 
        return       
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Hardik"));
// console.log(loginUserMessage("Hardik"));


function calculateCartPice(...num1){
    return num1
}
// console.log(calculateCartPice(200, 400, 500,2000,5000));



const user = {
    username: "hardik",
    price: 199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100, 600]));




 
 
