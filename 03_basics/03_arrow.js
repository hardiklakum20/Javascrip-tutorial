const user = {
    username: "Hardik",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`);  
        console.log(this);
              
    }

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);



// function chai(){
//     let username = "hardik"
//     console.log(this.username); 
// }
// chai()


// const chai = function() {
//     let username = "hardik"
//     console.log(this.username);
// }
// chai()



const chai = () => {
    let username = "hardik"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));



// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "Hardik"})
console.log(addTwo(3,4));


//const myArray  = [2,5,3,6,8]
//myArray.forEach
 

