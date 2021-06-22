var arr = [10, 7, 11, 8, 12, 9];
arr.sort((num1, num2) => num1 - num2);
// arr.sort((num1,num2)=>num1<num2?-1:1)

// //num1,num2?-1:1
// if(num1<num2){
//     return -1;
// }
// else{
//     return 1;
// }

console.log(arr);


// binary search

var element=11;
let flag=0;
var low=0,upp=arr.length-1;
while(low<=upp){
    let mid=Math.floor((low+upp)/2)

    if(element>arr[mid]){
        low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
    else if(element==arr[mid]){
        flag++;
        break;
    }
}

console.log(flag==0?"element not found":"element found");















//AbAC A
//BABC B