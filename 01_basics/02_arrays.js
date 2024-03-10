const marvel = ["spiderman","thor","Hulk"];
const dc = ["batman"," flash"," superman"]
// arrays can store anydatastructure
//marvel.push(dc);
console.log(marvel);
// takes an whole array as an single element

// inplace of push we can use concat but we need can not manipulate the original arrays
const allheroes=marvel.concat(dc);
console.log(allheroes);

// spread spreads all the elements 
mynew_array= [...dc,...marvel]
console.log(mynew_array);
// to create a new array we use 
console.log(Array.from("aviral"));
// read about isArray, from , of these all are functions of array