"use strict";
const name = "aviral"
const repocount = 50
const gameName= new String('Aviral');
// the symbol is ` ` it is between tab and 1 key
console.log(`my name is ${gameName}`);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
const newstring = gameName.substring(0,2);
console.log(newstring);
const newstring2 = gameName.slice(-8,4);
console.log(newstring2);
const string2= "     edbvsoas     "
// to remove the extra space we use trim
console.log(string2.trim());
const url = "https://urban-broccoli-7654944j4xpcvqq.github.dev/";
// to replace the some characters to some other character
console.log(url.replace('j4','-'));