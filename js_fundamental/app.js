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
// val = Number(true); //1
// val = Number(false);//0 
// val = Number(null);//0 
// val = Number('hello');//NaN
// val = Number([1,2,3,4]);//NaN

// val = parseInt('100.30');//100
// val = parseFloat('100.30');//100.3

//output
// console.log(val); 
// console.log(typeof val); 
// console.log(val.length); 


// const val1 =5;
// const val1 =String(5);
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);


// ** Numbers and Math object **
// const num1 = 100;
// const num2 = 50;
// let res;

//Simple math with numbers
// res = num1 + num2;
// res = num1 - num2;
// res = num1 * num2;
// res = num1 / num2;
// res = num1 % num2;

//Math object
// res = Math.PI;
// res = Math.round(2.8);//3
// res = Math.ceil(2.4);//3
// res = Math.floor(2.4);//2
// res = Math.sqrt(64);//8
// res = Math.abs(-3);//3
// res = Math.pow(8,2);//64
// res = Math.min(10,5,95,89,26,56,235,-12);//-12
// res = Math.max(10,5,95,89,26,56,235,-12);//-12
// res = Math.floor(Math.random()*20);

// console.log(res)


// **  String methods and concatenation

const firstName = "Ganesh";
const lastName = "Ledange";
const myAge = 27;
let fullName;

fullName = firstName + lastName;
console.log(fullName);//GaneshLedane

//concatenation
fullName = firstName + ' ' + lastName;
console.log(fullName); //Ganesh Ledange

//Append
fullName = 'chandrakant ';
fullName += 'Ledange';

fullName = 'Hello my name is ' +firstName+ ' and I am ' + myAge + ' old';

// Escaping
fullName = 'That\'s awesome, I can\'t wait';
console.log(fullName);

//length
res = firstName.length;

//concat 
res = firstName.concat(' ', lastName)

//change case
res = firstName.toUpperCase();
res = firstName.toLocaleLowerCase();

//index 
res = firstName[0];

//indexOf()
res = firstName.indexOf('s');
res = firstName.lastIndexOf('G');

//chatAt()
res = firstName.charAt('3');//e

//get last char
res = firstName.charAt(firstName.length -1); //h

//substring()
res = firstName.substring(0,4);//Gane

//slice is similar to substring but in slice we can give negative number
res = firstName.slice(0,4);//Gane
res = firstName.slice(-2);//sh will check form end 

console.log(res);
//split()
// used to split form sentece and return array 
let str = "Hello, good morning";
let strRes = str.split(' '); //['Hello', 'good', 'morning']
str = "html is scripting,css is styling ,javascript is programming language";
strRes = str.split(',');

//replace()
strRes = str.replace('css','SAAS');

//includes()
strRes = str.includes('javascript'); //true
strRes = str.includes('foorr'); //false


console.log(strRes);