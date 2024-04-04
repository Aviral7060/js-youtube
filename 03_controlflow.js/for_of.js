const stirng=" hello world"
// for of loop
for (const greet of stirng) {
    console.log(greet);
}
// maps
const map = new Map()
map.set('IN','INDIA')
map.set('USA','UNITED STATES OF AMERICA')
// in this the key value pair will get updated
map.set('IN','ICELAND')
map.set('FR','FRANCE')
//console.log(map);
for (const [key,value] of map) {
    console.log(key,':-',value);
    
}