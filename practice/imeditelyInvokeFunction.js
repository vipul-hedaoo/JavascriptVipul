// Immediately Invoked Function Expressions (IIFE)
// if will used to immeditely invoke the function and to reduce the polution of the global scope....

(function chai(){
    // named IIFE=Imeditely Invoke function expression
    console.log(`DB CONNECTED`);
})();

(function hello(name){
    console.log(`welcome ${name}`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
