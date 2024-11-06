// 1

// Чтобы удалить или добавить элемент в массив нам необходимо создать
// новый массив длиной len ± 1, что очень сильно сказывается на 
// производительности
// Массив совмещает в себе 2 структуры данных - очередь и стэк

// 2

function logger() {
   console.log(`I output only external context: ${this.item}`);
}

const o = { item: "some value" };

logger.bind(o)();
logger.call(o);
logger.apply(o);

// 3.1

const nums = [1, 2, 3, 4, 5];
console.log('sum: ', nums.reduce((s, e) => s+e, 0));

const strings = ['A', 'b', 'ou', 't'];
console.log('joined: ', strings.join(''));

console.log('min', Math.min(...nums));
console.log('max', Math.max(...nums));

// 3.2

const stack = [];
stack.push(1);
stack.push(2);
console.log(stack);
console.log(stack.pop());
console.log(stack);

// 3.3

const queue = [];
queue.unshift(1);
queue.unshift(2);
console.log(queue);
console.log(queue.shift());
console.log(queue);

// Бонус

function someFunction() {
   console.log(this.something);
   console.log(this.a);
}

const obj = {
   something: 10
};

const obj2 = {
    something: 20,
    a: 5
}


Function.prototype.myBind = function (obj, ...args) {
   const f = this;
   const context = {...obj, f};
   return function () {
       context.f(...args);
   }
}

const f = someFunction.myBind(obj).myBind(obj2);

f();