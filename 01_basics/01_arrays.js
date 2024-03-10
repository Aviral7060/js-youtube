// arrays are resizable
// declaration
const myArr= [0,1,2,3]
const myArr2 = new Array(1,2,3,4)
// array has the ability to push and pop
myArr.push(7)
// to print the whole array
console.log(myArr);
myArr.pop();
//console.log(myArr);

// to add an element at the starting position we use unshift
myArr.unshift(70)
//console.log(myArr);

// to remove the first element we use shift
myArr.shift()
//console.log(myArr);


// to convert the elements into strings we use join function
const myArr3= myArr.join();
//console.log(myArr3)
//console.log(typeof myArr3)


// very important slice and splice
// slice doesnot manipulate the original array and also doesnot the print the element of the last index
const myArr4= myArr.slice(1,3)
console.log(myArr4)
console.log("A", myArr)

// splice
/* it not only just prints the last element but also manipulates the original array */
const myArr5= myArr.splice(1,3)
console.log(myArr5)
console.log("B", myArr)