function addtwonum(number1,number2)
{
    return number1+number2;
}
console.log(addtwonum(15,20));
///rest operator
function addtocart(...num1)
{
    return num1;
}
console.log(addtocart(200,300,400,500,600));

function addtocart2(val1,val2,...num1)
{
    return num1;
}
console.log(addtocart2(200,300,400,500));
//object to pass in function
const user={
    username:"hitesh",
    price:1990
}
function handleobject(anyobj)
{
    console.log(`usernme is ${anyobj.username} and price ${anyobj.price}`);
}
handleobject(user);
handleobject({username:"vipul", pricr:"12345"});

const array=[1,2,3,4,5,6];
function handleArray(getarray)
{
    return getarray[3];
}
console.log(handleArray(array));
console.log(handleArray([9,8,7,6]));