var num=105;
// num / 3 print fiz, num/5 print buz, num/15 print fizbuz

if(num%3==0){
    if(num%15==0){
        console.log("fizbuz");
        }
    else{
        console.log("fiz");
    }
    
}
else if(num%5==0){
    if(num%15==0){
        console.log("fizbuz");
    }
    else{
        console.log("buz");
    }
}
else
console.log(num);