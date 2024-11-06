// 1

// Алгоритмов сортировки существует большое количество, но основными
// и популярными являются сортировка пузырьком (O(n^2)) и QuickSort (O(nlogn))

// 3

const Person = {
    a: 1,
    getA() {
        console.log(this.a);
    }
}

// const person = Object.create(Person);

const Person2 = {};
Person2.__proto__ = Person;

Person2.getA();

// 4
class PersonClass {
    name;
    constructor(name) {
        this.name = name;
    }
}

class PersonThree extends PersonClass {
    constructor(name) {
        super(name);
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
        return true;
    }
}

const newPerson = new PersonThree('Anatoly');

console.log(newPerson.getName());
newPerson.setName('Nikita');
console.log(newPerson.getName());


// Бонус 1

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 9;

const firstSum = (arr, total) => {
    let left = 0;
    let right = arr.length-1;
    while (left < right) {
        const [l, r] = [arr[left], arr[right]];
        if (l + r === total) return [l, r];
        if (l + r < total) left++;
        if (l + r > total) right--;
    }
    return [];
}

console.log(firstSum(arr,total))

// Бонус 2

// Сложность алгоритма О(n), если массив будет не отсортирован, 
// то сложность будет О(nlogn)