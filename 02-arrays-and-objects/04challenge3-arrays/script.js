//  CHALLENGE 1

let x;

const arr = [1, 2, 3, 4, 5];

arr.unshift(0);
arr.push(6);
arr.reverse();

console.log(arr);

//  CHALLENGE 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2];
arr3.splice(4, 1);

console.log(arr3);
