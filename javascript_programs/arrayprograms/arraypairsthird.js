var arr = [1, 2, 3, 4];
console.log(arr);

var low = 0, upp = arr.length - 1;
var element = 6;
var count = 1;
while (low < upp) {
    let total = arr[low] + arr[upp];

    //case1
    if (element == total) {
        console.log(arr[low], arr[upp]);
        low++;
    }
    //case2
    else if (element > total) {
        low++;
    }
    //case3
    else if (element < total) {
        upp--;
    }
    count++;
}
console.log(count);