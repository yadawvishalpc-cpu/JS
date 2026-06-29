// Primitive

//they are 7 types of

//1 String =  Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

//2 boolean = : Represents a binary value, either true or false, often used for conditional logic.

//3 Null = standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

//4 BigInt = Represents large integers that cannot be represented by the Number type.

//5 Number = Represents both integer and floating-point numbers. Example: 5, 3.14.

//6 symbol = it is mostly used used to find uniqnece

//7 undefined = Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

 // ********** Example ********  

console.log("vishal") // string 
 console.log("33")


const score = 100
const scoreValue = 100.3 // (number)

const isLoggedIn = false  //(boolean)

const outsideTemp = null  // (null)
let userEmail;    // (undefined)


const id = Symbol('123');   // symbol
const anotherId = Symbol('123');

console.log(id === anotherId);

const bigNumber = 3456543576654356754n; // (bigInt)



// Reference type also know (Non primitive)

//1 Array=Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

//2 Object = Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

//3 Function =Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

// **************Example*********

const heroes = ['spiderman', 'baalveer', 'krrish']; // array

let myobj = {
    name: "vishal",
    age: 22,
}; // object 


const myfunction = function(){
    console.log("helloduniya")
};  //function 