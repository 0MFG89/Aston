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