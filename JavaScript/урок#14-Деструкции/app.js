function calcValues(a, b) {
    return [
        a + b,
        // a - b,
        undefined,
        a * b,
        a / b
    ]
}

const result = calcValues(42, 55)
// const sum = result[0]
// const sub = result[1]



// -=Деструктеризация:=-

// const [sum, sub] = result
const [sum, sub = 'Вычитания нет', mult, ...other] = calcValues(42, 55)

// console.log(sum, mult, other, sub);



// =================================================



const person = {
    name: 'Alex',
    age: 18,
    address: {
        country: 'USA',
        city: 'New-York'
    }
}

// const name = preson.name
// const {name, age, address, car = 'Машины нет'} = person
const {name: firstName = 'Без имени', age, address: {city, country}, car = 'Машины нет'} = person                          //  Задаем "name" переменную "firstName"

// console.log(`${firstName}, ${age}, город: ${city}, ${car}`);

const {name, ...info} = person

// console.log(name, info);



// ====================================================


function logPerson({name: firstName2 = 'NN', age}) {
    console.log(name + ' ' + age);
}

logPerson(person)