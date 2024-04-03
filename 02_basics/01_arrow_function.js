// explicit return
const addtwo = (num1,num2) => {
    return num1+num2;
}
console.log(addtwo(3,4));

// implicit return
const addthree= (num1,num2) => (num1+num2);
console.log(addthree(4,5));