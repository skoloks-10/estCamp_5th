const emptyMap = new Map();
console.log(emptyMap); // Map(0) {}

const mapWithData = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

console.log(mapWithData); // Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

const myMap = new Map();
myMap.set("key1", "value1");
console.log(myMap); // Map(1) { 'key1' => 'value1' }

myMap.set(1, "number");
console.log(myMap); // Map(2) { 'key1' => 'value1', 1 => 'number' }

myMap.set(true, "boolean");
console.log(myMap); // Map(3) { 'key1' => 'value1', 1 => 'number', true => 'boolean' }

myMap.set(undefined, "undefined");
console.log(myMap); // Map(4) { 'key1' => 'value1', 1 => 'number', true => 'boolean', undefined => 'undefined' }

myMap.set(null, "null");
console.log(myMap); // Map(5) { 'key1' => 'value1', 1 => 'number', true => 'boolean', undefined => 'undefined', null => 'null' }

myMap.set({}, "object");
console.log(myMap); // Map(6) { 'key1' => 'value1', 1 => 'number', true => 'boolean', undefined => 'undefined', null => 'null', {} => 'object' }

myMap.set([], "array");
console.log(myMap); // Map(7) { 'key1' => 'value1', 1 => 'number', true => 'boolean', undefined => 'undefined', null => 'null', {} => 'object', [] => 'array' }

myMap.set(() => {}, "function");
console.log(myMap); // Map(8) { 'key1' => 'value1', 1 => 'number', true => 'boolean', undefined => 'undefined', null => 'null', {} => 'object', [] => 'array', [Function] => 'function' }

myMap.set(Symbol("key"), "symbol");
console.log(myMap); // Map(9) { 'key1' => 'value1', 1 => 'number', true => 'boolean', undefined => 'undefined', null => 'null', {} => 'object', [] => 'array', [Function] => 'function', Symbol(key) => 'symbol' }

console.log(myMap.size); // 9

console.log(myMap.has("key1")); // true
console.log(myMap.has("key2")); // false

console.log(myMap.delete("key1")); // true
console.log(myMap.delete("key2")); // false

console.log(myMap); // Map(8) { 1 => 'number', true => 'boolean', undefined => 'undefined', null => 'null', {} => 'object', [] => 'array', [Function] => 'function', Symbol(key) => 'symbol' }

// myMap.clear();
// console.log(myMap); // Map(0) {}

for (const entry of myMap) {
  console.log(entry); // [ 'key1', 'value1' ] [ 1, 'number' ] [ true, 'boolean' ] [ undefined, 'undefined' ] [ null, 'null' ] [ {}, 'object' ] [ [], 'array' ] [Function] [Symbol(key), 'symbol']
}

myMap.forEach((value, key) => {
  console.log(key, value); // key1 value1 1 number true boolean undefined undefined null null {} object [] array [Function] function Symbol(key) symbol
});
console.log("=======================================");

console.log(myMap.keys()); // [Map Iterator] { 'key1', 1, true, undefined, null, {}, [], [Function], Symbol(key) }
console.log(myMap.values()); // [Map Iterator] { 'value1', 'number', 'boolean', 'undefined', 'null', 'object', 'array', 'function', 'symbol' }
console.log(myMap.entries()); // [Map Iterator] { [ 'key1', 'value1' ], [ 1, 'number' ], [ true, 'boolean' ], [ undefined, 'undefined' ], [ null, 'null' ], [ {}, 'object' ], [ [], 'array' ], [Function], [Symbol(key), 'symbol'] }

const keyIterator = myMap.keys();
console.log(keyIterator.next()); // { value: 'key1', done: false }
console.log(keyIterator.next()); // { value: 1, done: false }
console.log(keyIterator.next()); // { value: true, done: false }
console.log(keyIterator.next()); // { value: undefined, done: false }
console.log(keyIterator.next()); // { value: null, done: false }
console.log(keyIterator.next()); // { value: {}, done: false }
console.log(keyIterator.next()); // { value: [], done: false }
console.log(keyIterator.next()); // { value: [Function], done: false }
console.log(keyIterator.next()); // { value: Symbol(key), done: false }
console.log(keyIterator.next()); // { value: undefined, done: true }

const mapFromArray = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
  ["key3", "value3"],
]);
console.log(mapFromArray); // Map(3) { 'key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3' }

const object = {
  name: "kim",
  age: 30,
  address: "seoul",
};

const mapFromObject = new Map(Object.entries(object));
console.log(mapFromObject); // Map(3) { 'name' => 'kim', 'age' => 30, 'address' => 'seoul' }

const objectFromMap = Object.fromEntries(mapFromObject);
console.log(objectFromMap); // { name: 'kim', age: 30, address: 'seoul' }
