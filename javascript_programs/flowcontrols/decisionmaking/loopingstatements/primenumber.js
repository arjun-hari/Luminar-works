// check whether the given number is prime or not

var num=11;
var flag=0;

for(let i=2;i<num;i++){
    if(num%i==0){
        flag++;
        break;
    }

}


console.log(flag==0?"Prime":"Not prime");
