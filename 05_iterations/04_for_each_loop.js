const coading = ["js","ruby","java","python","cpp"]

// coading.forEach( function (item) {
//     console.log(item);
    
// })


// coading.forEach( (item) => {
//     console.log(item);    
// })


// function printMe(item){
//     console.log(item);    
// }
// coading.forEach(printMe)


// coading.forEach( (item, index, arr) => {
//     console.log(item,index,arr);    
// })



const myCoading = [
    {
        langaugeName: "javascript",
        languageFile: "js"
    },
    {
        langaugeName: "java",
        languageFile: "java"
    },
    {
        langaugeName: "python",
        languageFile: "py"
    },
]
myCoading.forEach((item) => {
    console.log(item.langaugeName);
    
})