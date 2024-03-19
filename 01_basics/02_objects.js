// non singleton
//const tinderuser = {}


// singleton object
const tinderuser = new Object();
// let's give some ids to the user
// initialization is done
tinderuser.id= "123abc "
tinderuser.name= "sammy"

// we can store objects in objects like
const regularuser ={
    emailID: "some@1234",
     userfullname: {
        fullname: {
            firstname: "aviral",
            lastname: " jain"
        }

    }
}


//console.log(regularuser.userfullname);
// to  decrease the level of nesting
//console.log(regularuser.userfullname.fullname);

// now to combine objects
const obj1={1 : "a" ,2 :"b"}
const obj2 = { 3: "A", 4: "B"}
// it gives same problem as of arrays
const obj3 = {obj1,obj2};
// this is a solution or the below one both will give same result
const obj4 = Object.assign(obj1,obj2);
// in the below syntax the first operator works as target and other works as source
//const obj4 = Object.assign({},obj1,obj2);

// and the most easy syntax is 
const obj5 = {...obj1,...obj2}
console.log(obj5);

console.log(obj3);
console.log(obj4);

// it is stored in a array
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

// destructuring of the object
const course={
    coursename: "js",
    price: " 900",
    courseinstructor: "hitesh"

}
// {} this defines destructuring
const {courseinstructor: instructor}=course
console.log(instructor);



// intitalization of json
[
    {},
    {},
    {}
]

