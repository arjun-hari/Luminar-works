var num1=14,num2=63;


while(num1!=num2){
    if(num1>num2){
        num1-=num2;
    }
    else{
        num2-=num1;
    }
}


console.log("GCD is "+num1);
