// var n=10,i=0,n1=0,n2=1;
// console.log("Fibonacci Series");




// while(i<=n){
//     console.log(i);
//     n1=n2;
//     n2=i;
//     i=n1+n2;
// }

// 0,1,1,2,3,5,8,13,21
var num1=0,num2=1;
var sum=0;
console.log(num1,"\n",num2);
while(sum<21){
sum=num1+num2;
num1=num2;
num2=sum;
console.log(sum);
}