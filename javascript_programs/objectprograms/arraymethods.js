
// // => arrow function
// let add=(num1,num2)=> num1+num2;
// let sub=(num1,num2)=> num1-num2;
// let cube=num=>num**3;

// // (param1,param2,...,paramn)=>return statement;
// console.log(add(10,20));
// console.log(sub(50,10));
// console.log(cube(5));

// //create arroy function to return number odd or even
// var num_chk=num=>num%2==0?"even":"odd";
// console.log(num_chk(7));


//array methods  map(),filter(),reduce(),sort(),find(),some(),forEach()
// methodename=>number of parameters=>returntype
// map()=>1 parameter=>array
// filter()=>1 parameter=>object
// sort()=>2 parameters=>
// reduce()=>2 parameters=>single object
// find()=>1 parameter=>single object
// some()=>1 parameter=>boolean value


var arr=[1,5,6,7,3,4];

var squares=arr.map(num=>num**2);
console.log(squares);
var cubes=arr.map(num=>num**3);
console.log(cubes);

// print all even numbers %2==0
var evens=arr.filter(num=>num%2==0);
console.log(evens);

// print sum of elements
var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);
// print highest element
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);
// print lowest element
var min=arr.reduce((num1,num2)=>num1>num2?num2:num1);
console.log(min);

//search 7
var srch=arr.find(num=>num==7)
console.log(srch);

