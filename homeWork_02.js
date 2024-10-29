// 1
const counter1 = {
   id: 1
};
const counter2 = Object.create({}, {
   id: {
      enumerable: true,
      value: 1
   }
});
const counter3 = Object.assign({}, counter1);
const counter4 = {};
Object.defineProperty(counter4, 'id', {
   value: 1,
   enumerable: true,
   writable: true,
   configurable: true
});

//2
const counter5 = Object.assign({}, counter1);
const counter6 = {...counter1};
const counter7 = JSON.parse(JSON.stringify(counter1));

//3
function makeCounter1 () {} // function declaration
const makeCounter2 = function () {} // function expression
const makeCounter3 = function makeCounter3InnerRef () {} // NFE
const makeCounter4 = () => {} // arrow function

//4

// Метод structuredClone полностью осуществляет глубокое копирование объекта, все объекты внутри так же копируются и теперь ссылки на эти
// объекты в оригинале и копии не будут совпадать
// не может клонировать функции, узлы DOM, дискрипторы свойств, сеттеры и геттеры

// Бонус 1
const obj1 = {
   s: [undefined, 1]
};

const obj2 = {
   s: [undefined, 1]
};

const obj3 = { here: { is:
"on", other: "3" }, object: "Y" };

const obj4 = { here: { is:
"on", other: "2" }, object: "Y" };

const obj5 = {
   s: undefined  
};

const obj6 = {
   s: undefined
};

const obj7 = {
   s: { b: { c: 1 }}
}

const obj8 = {
   s: { b: { c: 1 }}
}

const deepEqual = (obj1, obj2) => {
   for (let key in obj1) {
       if (!(key in obj2)) return false;
       if (Array.isArray(obj1[key]) && deepEqual(obj1[key], obj2[key])) continue;
       if (obj1[key] instanceof Object && deepEqual(obj1[key], obj2[key])) continue;
       if (obj1[key] !== obj2[key]) return false;
   }
   
   return true;
};

console.log(deepEqual(obj1, obj2)); // true

console.log(deepEqual(obj3, obj4)); // false

console.log(deepEqual(obj5, obj6)); // true

console.log(deepEqual(obj7, obj8)); // true

//Бонус 2

function reverseStr(str) {
   return str.split('').reverse().join('');
}

console.log(reverseStr('abcd')); // dcba