var num=121;
var num1=num;

console.log(num);

var res="";
while(num!=0){
let digit=num%10;
res+=digit;     
num=Math.floor(num/10);

}
console.log(res);

// if(res==num1){
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }

console.log(res==num1?"palindrome":"not palindrome");