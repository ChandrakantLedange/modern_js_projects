//log to console
console.log("Hello from app file");
console.log(123);
console.log([10,20,30]);
console.log({a:11,b:22});
console.table({a:111,b:222});
console.error('this is some error');
console.warn("this is warning");
console.time("time start");
console.log("count the time");
console.log("count the time");
console.log("count the time");
console.log("count the time");
console.log("count the time");
console.log("count the time");
console.log("count the time");
console.timeEnd("time start");
// console.clear();

//comment 
// single line comment
/*
multi
line comment
*/


//Variables
//var, let and const

// var name = "Ganesh";
// console.log(name);
// name = "Mangesh";
// console.log(name);

//Initialization var //this is mostly used when we are working with switch statement
// var greeting;
// console.log(greeting); //undefined
// greeting= "Good morning";
// console.log(greeting);


//rules for variable creation
//letters , numbers , _  and $
//can not starts with number


//LET
let name = "Ganesh";
console.log(name);
name = "Mangesh";
console.log(name);


//const 
const age = 26;
console.log(age);
// age=28;   //can't reassign
// const lang; // have to aasign a value


//Data types in javascript
//Thre are two types of data types 

//1.primitiv data types
//I)String - sequence of character
//II)Number - decimal , float and all type of numbers.
//III)Boolean - true false
//IV)Null - Empty value - typeof - object
//V)Undefined - Not assigned value
//VI)symbol - (ES6 feature) - eg. const sym = symbol();

//Reference Type
//I)Array
//II)Object
//III)FUnctions ... etc


// ** Type conversion ** 
let val ;

//Number to string
val = String(555);
val = String(4+4);

//Boolean to string
val = String(true);

//date to string
val = String(new Date());

//Array to string
val = String([1,2,3,4]);// lenth will count with comma(,)//7

//toString()
val = (5).toString();
val = (true).toString();

//string to number 
val = Number('5'); 
// console.log(val.toFixed(2));//5.00
val = Number(true); //1
val = Number(false);//0 
val = Number(null);//0 
val = Number('hello');//NaN
val = Number([1,2,3,4]);//NaN

val = parseInt('100.30');//100
val = parseFloat('100.30');//100.3

//output
// console.log(val); 
// console.log(typeof val); 
// console.log(val.length); 


// const val1 =5;
const val1 =String(5);
const val2 = 6;
const sum = val1 + val2;
console.log(sum);
console.log(typeof sum);