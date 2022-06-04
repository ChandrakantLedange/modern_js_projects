//if statements and comparison operators

//syntax
// if(somthing){
//     do something
// }else{
//     do something else
// }

// let id = 100;
//equal to ==
// if(id == 110){
//     console.log("EQUAL");
// }else{
//     console.log("NOT EQUAL");
// }
// //not equal to !=
// if(id != 120){
//     console.log("EQUAL");
// }else{
//     console.log("NOT EQUAL");
// }
// //equal to value and type ===
// if(id === 100){
//     console.log("EQUAL");
// }else{
//     console.log("NOT EQUAL");
// }


id= 100;
//test if undefined
if(typeof id !== 'undefined'){
    console.log(`The id is ${id}`);
}else{
    console.log("NO ID")
}

//greter and less then > , <
if(id > 200){
    console.log("correct");
}else{
    console.log("incorrect");
}

if(id < 200){
    console.log("correct");
}else{
    console.log("incorrect");
}

if(id <= 200){
    console.log("correct");
}else{
    console.log("incorrect");
}
if(id >= 200){
    console.log("correct");
}else{
    console.log("incorrect");
}

//if else 
// let color = 'orange';

// if(color === 'red'){
//     console.log("color is red");
// }else if ( color === 'blue'){
//     console.log("color is blue");
// }else{
//     console.log('color is not red or blue')
// }

//logical operators

let name = 'Ganesh';
let age = 20;

if(age > 0 && age <10){
    console.log(`${name} is a child`);
}else if(age > 13 && age <=19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}


if(age > 0 || age <10){
    console.log(`${name} is a child`);
}else if(age > 13 || age <=19){
    console.log(`${name} is a teenager`);
}else{
    console.log(`${name} is an adult`);
}

//ternary operator
console.log(id === 100 ? 'your correct':'yout incorrect');

//without brases
if(id === 100)
    console.log("correct")
else
    console.log("incorrect");


//switch statement

let color = 'purple';
switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'orage':
        console.log('color is orange');
        break;
    default:
        console.log("given color is not match");
        break;
}


let day;
switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);


//Function declaration and expressions
function greet(){
    console.log("Good evening");
}
//function calling
greet();

function fullName(firstName,lastName){
    return `Hello ${firstName} ${lastName}`
}

//default parameter
function fullName(firstName='john',lastName='doe'){
    return `Hello ${firstName} ${lastName}`
}//Hello john doe

console.log(fullName());

//function expression
const square = function(x=3){//it's called anonymous function
    return x*x;
}
console.log(square());

//IIFEs - immidiatley invokable function expressions
//a function you declare and call at same time

(function(){
    console.log("IIFEs function called");
})();

(function(name){
    console.log(`hey ${name}`);
})('chandrakant');

//property methods
const todo={
    add:function(){
        console.log('Add todo..');
    },
    edit:function(id){
        console.log(`edit todo..${id}`);
    }
}
//out of the object
todo.delete =function(){
    console.log('Delete todo..');
}
todo.add();
todo.edit(102);
todo.delete();