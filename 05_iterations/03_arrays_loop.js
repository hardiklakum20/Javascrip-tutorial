// for of loop

["", "", ""]
[{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);   
}

const greetings = "Hello Worlds!"
for (const greet of greetings) {
    // console.log(greet);    
}

//Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-' , value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const [key, value] of myObject) {
//         console.log(key, ':-', value);
        
// }




const myObjects = {
    js: "Java Script",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}
for (const key in myObjects) { 
    // console.log(myObjects[key]);
    // console.log(`${key} shortcut is for ${myObjects[key]}`);          
}



const programing = ["js","rb","py","java","cpp"]
for (const key in programing) {   
    // console.log(programing[key]);    
}




// const data = new Map()
// data.set('IN', "India")
// data.set('USA', "United States of America")
// data.set('Fr', "France")
// for (const key in data) {   
//     console.log(key);     
// }



