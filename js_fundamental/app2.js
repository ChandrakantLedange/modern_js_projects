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
let color = 'orange';

if(color === 'red'){
    console.log("color is red");
}else if ( color === 'blue'){
    console.log("color is blue");
}else{
    console.log('color is not red or blue')
}

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