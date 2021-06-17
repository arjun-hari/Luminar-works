// array? collection of same and different types of objects

// length limit? there is no length limit for javascript array

// define? []

// is it possible to update? yes

// insertion order is preserved or not? preserved

// duplications allowed or not? yes


// var expenses=[30000,25000,27000,25000,"hai",true]
//  console.log(expenses[1]);
//  expenses[4]+=2000;
//  console.log(expenses);

// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

var expenses=[30000,25000,27000,25000,25000]
for(let val of expenses){
    console.log(val);
}

// to find total expenses

var totexp=0;
for(let exp of expenses){
    totexp+=exp;
}
console.log("total exp=",totexp);


// print all exp > 25000

for(let exp of expenses){
    if(exp>25000){
        console.log(exp);
    }  
}

// >25000
// count

var count=0;
for(let exp of expenses){
    if(exp>25000){
        count++;
      }
}
console.log(count);

// highest exp

var max_exp=0;
for(let exp of expenses){
    if(exp>max_exp){
max_exp=exp
    }
}
console.log("max expense is",max_exp);



// var arr=[1,2,3,4];  //num=7 (4,3)

// var arr=[4,5,3];    //8,7,9
// // [5,3,6]=[9,11,8] ////

//min from expenses
//hollow star pyramid