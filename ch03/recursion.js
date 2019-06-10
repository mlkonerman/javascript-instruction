// function isEven (n) {
// if (n % 2 == 0) {
//     return true;
// } else {
//     return false;
// }
// }
// console.log(isEven(50));

function isEven (n) {
    if (n == 0) {
        return true;
    }
    else if (n == 1) {
        return false;
    } else {
        return isEven(n-2);
    }
}
console.log(isEven(100));