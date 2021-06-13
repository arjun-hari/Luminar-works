// num1,num2,num3
// largest among three

// second largest

// sort these three numbers

// read age and health_issues=true/false
// if age>65 eligible for vaccination
// if 18-age-65 health_issues=true  eligible for vaccination
// else not eligible

var num1=10,num2=15,num3=18;

if(num1>num2 && num1>num3){
    if(num2>num3){
        console.log("Largest is "+num1 +" and second largest is "+num2);
        console.log("Sorted numbers "+num1 +","+num2 +","+num3);
    }
    else{
        console.log("Largest is "+num1 +" and second largest is "+num3);
        console.log("Sorted numbers "+num1 +","+num3 +","+num2);
    }
}
else if(num2>num1 && num2>num3){
    if(num1>num3){
        console.log("Largest is "+num2 +" and second largest is "+num1);
        console.log("Sorted numbers "+num2 +","+num1 +","+num3);
    }
    else{
        console.log("Largest is "+num2 +" and second largest is "+num3);
        console.log("Sorted numbers "+num2 +","+num3 +","+num1);
    }
}
else if(num3>num1 && num3>num2){
    if(num1>num2){
        console.log("Largest is "+num3 +" and second largest is "+num1);
        console.log("Sorted numbers "+num3 +","+num1 +","+num2);
    }
    else{
        console.log("Largest is "+num3 +" and second largest is "+num2);
        console.log("Sorted numbers "+num3 +","+num2 +","+num1);
    }
}