function range (start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function sum (array) {
    let arrayTotal = 0;
    for (let i = start; i <= end; i++) {
        arrayTotal += i;
    }
    return arrayTotal;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
      total += value;
    }
    return total;
  }

console.log(range(1, 10));
console.log(sum(range(1, 10)));
