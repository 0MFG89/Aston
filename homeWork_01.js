// 3

const string1 = "Hi!";
const string2 = String("Hi!");

const num1 = 1;
const num2 = Number(1);

const bool1 = true;
const bool2 = Boolean(1);

const null1 = null;

let undefined1;
const undefined2 = undefined;

const symbol1 = Symbol('1');
const symbol2 = Symbol.for('something');

const bigInt1 = BigInt(1);
const bigInt2 = 1n;

// 5

const res = "B" + "a" + (1 - "hello");
console.log(res); // BaNaN

const res2 = (true && 3) + "d";
console.log(res2); // 3d

const res3 = Boolean(true && 3) + "d";
console.log(res3); // trued
