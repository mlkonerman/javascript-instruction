let arr1 = [2,4,6,8,10];
let arr2 = [];

for(let i=(arr1.length-1); i >= 0; i--) {
    arr2.push(arr1[i]);
}
console.log(arr1);
console.log(arr2);

// function reverseArrayInPlace(array) {
//     let arr = [2,4,6,8,10];
//     for (let i = 0; i <= (arr.length - 1); i++) {
//     arr.unshift(arr[i]);
// }
// }
// reverseArrayInPlace(arr);
// console.log(arr);

// for (let i = 0; i < (arr.length/2); i++) {
//     //get value at beginning and end of array
//     let a = arr[i];
//     let end = arr.length-1-i;
//     let b = arr[end];
//     //swap two positions in the array
//     arr[i] = b;
//     arr[end] = a;
// }
//console.log(arr);