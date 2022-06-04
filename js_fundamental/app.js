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


// ** Template literals **
const myName = "John";
const myAage = 26;
const job = "Web Developer";
const city = "Hyderabad";
let html;

//without template literals(ES5)
html = '<ul><li> Name:' +myName + '</li><li>Age:' +myAge +'</li>';

// With template literals(ES6)
html = `
<ul>
 <li>Name: ${myName}</li>
 <li>Age: ${myAge}</li>
 <li>Job: ${job}</li>
 <li>Age count: ${age>30 ? 'Over 30': 'Under 30'}</li>
 <li>${3+3}</li>
`
document.body.innerHTML = html;


// ** Array and methods **
const numbers = [4,6,56,789,65,89,74];
const numbers2 = new Array(10,20,30,40,50,60);
const fruits = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'Hey',true,undefined,null,{a:1,b:2},new Date()];

console.log(mixed);

let arrayRes;

//get array length
arrayRes = numbers.length; //7

//check if is array
arrayRes = Array.isArray(numbers); //true

//get single value
arrayRes = numbers[3];//789

//inser into array
numbers[2] = 600;
// console.log(numbers); //[4, 6, 600, 789, 65, 89, 74]

//find index of value
arrayRes = numbers.indexOf(65) //4
arrayRes = numbers.indexOf(605) //-1 not exist in array

//mutating arrays
//push - will push value end of the array.
numbers.push(303); //[4, 6, 600, 789, 65, 89, 74, 303]

//unshift - will push value front of the array.
numbers.unshift(503); //[503, 4, 6, 600, 789, 65, 89, 74, 303]

//pop - used to delete last value from array
numbers.pop(); //[503, 4, 6, 600, 789, 65, 89, 74]

//shift - used to delete front value from array
numbers.shift(); //[4, 6, 600, 789, 65, 89, 74]

//splice values - we can remove specific values
numbers.splice(1,1);//[4, 600, 789, 65, 89, 74] //6 gone

//reverse()
numbers.reverse(); //[74, 89, 65, 789, 600, 4]

//concate array
let newArray = numbers.concat(numbers2);
// console.log(newArray);// [74, 89, 65, 789, 600, 4, 10, 20, 30, 40, 50, 60]

//sort 
newArray = fruits.sort(); //['Apple', 'Banana', 'Orange', 'Pear']
newArray = numbers.sort();//sort by first number //[4, 600, 65, 74, 789, 89]

//use compare function to real number sorting 
newArray = numbers.sort((x,y)=>{
    return x-y
}); //[4, 65, 74, 89, 600, 789]

//use compare function to reverse real number  
newArray = numbers.sort((x,y)=>{
    return y - x;
}); //[789, 600, 89, 74, 65, 4]

//find
function under50(num){
    return num < 50;
}

// let under50_result = numbers.find(under50);
// console.log(under50_result); //4

// console.log(newArray);
// console.log(numbers);
// console.log(arrayRes);

// ** Object literals **

const person = {
    firstName:"steve",
    lastName:"smith",
    age:28,
    email:'steve@abc.com',
    hobbies:['music','sports'],
    address:{
        city:"miami",
        state:'california'
    },
    getBirthYear:function(){
        return 2022 - age;
    }
}
let details;
details = person;

//get specific value 
details = person.firstName;
details = person['lastName'];
details = person.age;
details = person.email;
details = person.hobbies; //all
details = person.hobbies[1];//sports
details = person.address;
details = person.address.state;
details = person.getBirthYear();

console.log(details);

const people=[
    {name:'John', age:30},
    {name:'colleen', age:33},
];

for(let i=0; i< people.length; i++){
    console.log(people[i].name);
}


//** Date and Times **/
let dateRes;
const today = new Date();
dateRes = today;

//custom date
let birthday = new Date('11-12-1994 11:20:00');
birthday = new Date('nov 10 1994 11:20:00');
birthday = new Date('10/12/1994');
dateRes = birthday;
dateRes = today.getMonth(); //5 - actual is june(6) month starts from 0
dateRes = today.getDay(); //6
dateRes = today.getFullYear(); //2022
dateRes = today.getHours(); //8
dateRes = today.getMinutes();//16
dateRes = today.getSeconds();
dateRes = today.getMilliseconds();
dateRes = today.getMilliseconds();
dateRes = today.getTime(); //time stamp 1654310874629

//we can set
birthday.setMonth(2);
birthday.setFullYear(1994);
console.log(birthday);

console.log(dateRes);
console.log(typeof dateRes); //object
