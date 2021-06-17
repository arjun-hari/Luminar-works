var arr=[1,2,3,4];
// sort?
// duplicates?
// duplicate pairs(2,4)(4,2)


var count=1;
var element=6;
for(let num1 of arr){
    for(let num2 of arr){
        let total=num1+num2;
        if((total==element) && (num1!=num2)){
            console.log("pairs ",num1,num2);
        }
        count++;
    }
}
console.log(count);

//arraypairs,arraypairssecond,arraypairsthird ==> different approaches