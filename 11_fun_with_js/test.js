const myArr = []
// DebugPrint(myArr)

// countinues, Hopley

// SMI (Small integer)
// Packed element
// Double (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// Packed_SMI_Elements

arrTwo.push(6.0)
// Packed_Doubled_Elements

arrTwo.push('7')
// Packed_Elements

arrTwo[10] = 11
// Holey_Elements

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);


//Bound Check
// hasOwnPropert(arrTwo, 9)
// hasOwnPropert(arrTwo.prototype, 10)
// hasOwnPropert(Object.prototype, 10)

// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[2]);

// SMI > Double > Packed
// H_SMI > H_Double > H_Packed


const arrFour = new Array(3)
// just 3 holes. Holey_Smi_Elements
arrFour[0] = '1'  //Holey_Elements
arrFour[1] = '2'  //Holey_Elements
arrFour[2] = '3'  //Holey_Elements

const arrFive = []
arrFive.push('1') //Packed Element
arrFive.push('2') //Packed Element
arrFive.push('3') //Packed Element



const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN)


// for, for-of, forEach


