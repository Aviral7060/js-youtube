// when we declare objects as literals than they are not singleton 
// using constructor the object is created as singleton

// object literals
// the curly braces is the object only
// in objects the values are stored in key value pair
// where keys are stored in string
const mysym= Symbol("mykey1");
const jsuser={
    name: "Aviral",
    // to access Symbol datatypes we need to use and cannot be accessed using dot operator
    [mysym]: "key1",
    "fullname": "aviral jain",
    age: "21",
    email : "idon'tknow@gmail.com",
    isloggedin: "YEs",
}
//now how to access the objects
console.log(jsuser.email);
console.log(jsuser["email"]);

// now if i want to access the fullname key than i cannot use dot operator
console.log(jsuser["fullname"]);
console.log(jsuser[mysym]);

// now if you want to change than you can simply change by
jsuser.email= "abiraljain@gmail.com"

// and if you want nobody to change it than you can use freeze
//Object.freeze(jsuser);

jsuser.greetings = function () {
    console.log("hello");
    
}

jsuser.greetings2 = function () {
    console.log(`hello, ${this.name}`);
    
}
console.log(jsuser.greetings());
console.log(jsuser.greetings2());
// as we have freezed the object that is why it is not taking any changes
