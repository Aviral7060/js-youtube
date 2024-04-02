function twonum(number1,number2){
    console.log(number1+number2);
}
twonum(5,4);
// res function
// this puts everything in an array if the individual values are given
function totalValue(...num1){
    return num1;
}
console.log(totalValue(200,4000,500,8923,125));

// for an object
const user={
    username:  " hitesh",
    price: 700
}
function givedetail(anyobject){
    console.log(`the username is ${anyobject.username} and the price is ${anyobject.price}`);
}
givedetail(user);

// another way
givedetail({
    username: " rahul",
    price: 500
})