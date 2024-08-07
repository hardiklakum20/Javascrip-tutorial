//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const jdUser = {
    name: "Hardik",
    "full name": "Hardik Lakum",
    [mySym]: "key1",
    age: 18,
    location: "Ahemedabad",
    email: "hardiklakum80@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jdUser.email);
// console.log(jdUser["email"]);
// console.log(jdUser["full name"]);
// console.log(jdUser[mySym]);

jdUser.email = "harshidalakum10@gmail.com"
// Object.freeze(jdUser)
jdUser.email = "harshidalakum20@gmail.com"
// console.log(jdUser);

jdUser.greeting = function(){
    console.log("Hello Js User");
}
jdUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(jdUser.greeting());
console.log(jdUser.greetingTwo());


