const person = {
    name: 'Maxim',
    age: 25,
    greet: function() {
        console.log('greet');
    }
}

// In console
//   person.age = "25"
//   person.name = "Maxim"
//   ...

// !★Прототип можно найти, если в консоли написать имя объекта и развернуть его★!
// ★Прототип будет подписан ,как  "__proto__" или "Prototype"★


const person2 = new Object({
    name: 'Jacob',
    age: 28,
    greet: function() {
        console.log('greet');
    }
})

Object.prototype.seyHello = function() {        //  ★Добовляем в прототип новое свойство★
    console.log('Hello World');
}

const Alexander = Object.create(person2)
Alexander.name = 'Alexander'                    //   ★Перезапись имени★

// const str = 'I am String'
const str = new String('I am string')