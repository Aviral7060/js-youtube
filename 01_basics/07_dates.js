//Temporal.Now.instant();
let mydate=new Date();
console.log(mydate);
// dates are given in milliseconds
console.log(mydate.toString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
// now if we want to give input of a specific string
let newdate= new Date(2023,0,5);
let newdate2= new Date("2023-01-05");
//console.log(newdate2.toLocaleString());
// to get the exact time stamp value used for poles and stuff
let timeStamp = Date.now();
console.log(timeStamp);

// if you want to make the given date converteed into milli seconds

//console.log(newdate2.getTime());

// to get dates in seconds format 
console.log(Math.floor(Date.now()/1000));
// to customize the date format

let newdate3= new Date();
console.log(newdate3.toLocaleString("default",{
    calendar: "long"
}));
