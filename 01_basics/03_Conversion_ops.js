//let score = "33"
let score = "33abc"
console.log(typeof score);
// now in this we know the type of data but in some cases we take input and doesnot know its type
// so we can define there datatype by using Number(Variable);
let inNumber= Number(score);
console.log(inNumber);
console.log(typeof inNumber);
// now if we put some string in inplace of no. and use the datatype Number than what happens in place of 33
// it will print NaN(not a number)
// null=> 0
//undefined=> undefined
// string => NaN
// for boolean 
// 0=>false, 1=> true
// ""=> false, "nush"=> true
