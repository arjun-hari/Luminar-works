for(let row=1;row<=5;row++){
     //  row
    let str="";
 for(let space=5-row;space>=1;space--){
     // space
     str+=" ";
 }   
 for(let star=1;star<=row;star++){
     // star  
    str+="* ";
 }
 console.log(str);
}