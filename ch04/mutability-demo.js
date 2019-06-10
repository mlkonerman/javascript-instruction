let obj1 = {value:10};
let obj2 = obj1;
let obj3 = {value:10};

console.log(obj1 == obj2);
console.log(obj1 == obj3);

obj1.value = 15;
console.log(obj2.value);
console.log(obj3.value);

//bottom p. 65
const score = {visitors: 0, home: 1}
console.log(score);
score.visitors = 1;
console.log(score);
score.home = 2;
console.log(score);

//the below isn't allowed because score is a constant
//score = {visitors: 1, home: 1};