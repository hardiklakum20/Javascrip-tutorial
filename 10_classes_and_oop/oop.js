const user = { 
    username: "Hardik",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user Details from database");  
        // console.log(`Username: ${this.username}`);
        console.log(this);                      
    }
}                // -----Object literal
// console.log(user.username);    
//console.log(user.getUserDetails());  
// console.log(this);
                                



function User(username, logincount, isLoggedIn){
    this.username = username;
    this.loginCount = logincount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username}`);        
    }

    return this
}

const userOne = new User("Hardik",10,true)
const userTwo = new User("Chai", 9, false)
console.log(userOne.constructor);
// console.log(userTwo);

// new is create a empty object. it's called Instance. 
// Constructor function called for the new keyword
// This keyword enject
// Run
