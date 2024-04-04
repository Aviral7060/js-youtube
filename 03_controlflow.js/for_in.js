// used for objects
const myObject={
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift"
}

for (const key in myObject) {
    // this will print the keys
        console.log(key);
        // this will print the objects values
        console.log(myObject[key]);
    }
