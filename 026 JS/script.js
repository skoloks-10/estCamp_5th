const original1 = ["a", "b", "c"];

const copy1 = Array.from(original1);
copy1[0] = "A";
console.log(original1); // ["a", "b", "c", "d", "e"]
console.log(copy1); // ["A", "b", "c", "d", "e"]

const original2 = ["10", "20", "30"];
const copy2 = original2.slice();
copy2[2] = 100;
console.log(original2); // ["10", "20", "30"]
console.log(copy2); // ["10", "20", 100]

const origginal3 = ["1", "2", "3", "4", "5"];
const copy3 = origginal3.concat();
copy3[0] = "A";
console.log(origginal3); // ['1','2','3','4','5']
console.log(copy3); // ['A','2','3','4','5']

const fruits = ["apple", ["banana", "orange", ["kiwi", "mango"]]];
console.log(fruits.join("-")); // apple-banana-orange-kiwi,mango

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat(1));
