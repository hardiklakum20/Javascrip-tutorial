const name = "hardik"
const repoCount = 20

// console.log(name + repoCount + " value");
// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String ('Hardik-hl-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newstringOne = "    Hardik     "
console.log(newstringOne);
console.log(newstringOne.trim());

const url = "https://hardik.com/hardik%20lakum"
console.log(url.replace('%20','-')); 

console.log(url.includes('sundar')); 

console.log(gameName.split('-'));