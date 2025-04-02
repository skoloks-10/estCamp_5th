console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 1e290);
console.log(1 / 0); // 위니북스에서는 null로 출력되므로 콘솔에서 확인하세요.

let num = 9999e10000;
console.log(num === Infinity); // true
console.log(typeof NaN);
console.log(0 / 0);
console.log("문자열" * 10);

// 10진수
let decimal = 42;

// 2진수 (0b로 시작)
let binary = 0b101010; // 42
console.log(binary); // 42 (10진수로 출력됨)

// 8진수 (0o로 시작)
let octal = 0o15; // 42
console.log(octal); // 42 (10진수로 출력됨)

// 16진수 (0x로 시작)
let hex = 0xfa; // 42
console.log(hex); // 42 (10진수로 출력됨)

// 값 비교
console.log(decimal === binary);
console.log(binary === octal);
console.log(octal === hex);

console.log(2e3);

console.log(1000_1000_1000);

let sym1 = Symbol();

let sym2 = Symbol("hello");
let sym3 = Symbol("hello");

console.log(sym1);
console.log(sym2);
console.log(sym3);
console.log(sym2 === sym3); // false
