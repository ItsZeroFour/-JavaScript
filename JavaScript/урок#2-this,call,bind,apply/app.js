function hello() {
    console.log('Hello', this);     //  Если написать this и вызвать эту функцию  в консоли,то мы получим глобальный объект Window
}

const person = {
    name: 'Alex',
    age: 16,
    seyHello: hello,
    // sayHelloWindow: hello.bind(window)    // Один и тот же результат
    // sayHelloWindow: hello.bind(this)      // Один и тот же результат
    sayHelloWindow: hello.bind(document),    // DOM
    
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)  // Группировка
        console.log(`Name is ${this.name}`); // То же самое, что и ${person.name} 
        console.log(`Age is ${this.age}`);   // То же самое, что и ${person.age}
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
    }
}

const Jacob = {
    name: 'Jacob',
    age: 31
}

// person.logInfo.bind(Jacob)()                                 // Вместо того, что бы получить значение из "person", мы биньдим значения из "Jacob" и получаем их
// const fnJacobInfoLog = person.logInfo.bind(Jacob)
// fnJacobInfoLog('Frontend', '1-234-567-89-10')                // Передаем параметры работы и номера телефона в функцию "logInfo"

// II способ

// const fnJacobInfoLog = person.logInfo.bind(Jacob, 'Frontend', '1-234-567-89-10')
// fnJacobInfoLog()



// Call & Apply

// person.logInfo.bind(Jacob, 'Frontend', '1-234-567-89-10')()     //  Можем вызвать когда угодно
// person.logInfo.call(Jacob, 'Frontend', '1-234-567-89-10')       //  То же самое ,что и метод bind, но он сразу же вызывает эту функцию
person.logInfo.apply(Jacob, ['Frontend', '1-234-567-89-10'])       //  В метод Apply мы можем давать значения только в массиве

// ===========================================================================================================
// Practic
const array = [1, 2, 3, 4, 5]                                      //   Умножение каждого числа на 5

// function multBy(arr, n) {
//     return array.map(function(i) {
//         return i * n
//     })
// }

// console.log(multBy(array, 5));

// Функция сверху - не очень удобный варриант. Верный:

Array.prototype.multBy = function(n) {
        return this.map(function(i) {
        return i * n
    })
}

console.log(array.multBy(20)); 

// Можно умножать прям в консоли:   [значение, значение...].multBy(значение)