var arr=[4,5,3];

// step 1 finding total sum
var total=0;
for(let num of arr){
    total+=num;
}
// op=[];
for(let num of arr){
    // op.push(total-num);
   console.log(total-num); //included
}
// console.log(op);