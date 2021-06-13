// A.O(+,-,*,/,%.**)
var num1=10;
var num2=3;

console.log(num1/num2);


//floor
console.log(Math.floor(num1/num2));
 
//conceil
console.log(Math.ceil(3.8));



// R.O(<,>,<=,>=,!=,==,===)
console.log(10>1);
var num3="10";
console.log(num1==num3); //true == content comparison
console.log(num1===num3); //false === both content and type strict match

// L.O(&&,||,!)

// Bitwise Operators(&,|,^,~)
// & and
// | or
// ^ xor
// ~ not

// x   y   x&y   x|y   x^y
// 0   1    0     1     1
// 1   1    1     1     0
// 0   0    0     0     0
// 1   0    0     1     1

console.log(2&4);

// 0010
// 0100
// 0000 = 0

console.log(2|4);

// 0010
// 0100
// 0110 = 6
