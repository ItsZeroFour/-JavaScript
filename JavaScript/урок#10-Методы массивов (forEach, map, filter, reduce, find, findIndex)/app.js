const people = [
    {name: 'Alex', age: 34, budget: 120000},
    {name: 'Noah', age: 19, budget: 60000},
    {name: 'Mason', age: 42, budget: 180000},
    {name: 'Jacob', age: 18, budget: 50000},
    {name: 'William', age: 24, budget: 90000},
    {name: 'Alexander', age: 28, budget: 35000},
]

for (let i = 0; i < people.length; i++) {                               //  Перебор массива
    // console.log(people[i]);
}

for (let person of people) {
    // console.log(person);
} 




// ForEach
people.forEach(function(person, index, pArr) {
    // console.log(person);
    // console.log(index);
    // console.log(pArr);
})

// people.forEach(person => console.log(person))





// Map
const newPeople = people.map(person => {
    // return person
    // return 'Hello'
    // return person.name                                                      //  Получение всех имен из массива
    return `${person.name} (${person.age * 3})`
})
// console.log(newPeople);



// Filter
const adults = []
for (let i = 0; i < people.length; i++) {                                       //  Перебираем людей, старше 21 года и заносим их в новый массив
    if(people[i].age >= 21) {
        adults.push(people[i])
    }
}
// console.log(adults);

// Аналогичный функционал записи сверху, но при помощи метода filter

const adults2 = people.filter(person => person.age >= 21)
// console.log(adults2);



// Reduce
let amount = 0
for (let i = 0; i < people.length; i++) {                                           //  Суммирование бюджета
    amount += people[i].budget
}

// console.log(amount);

// Аналогичный функционал записи сверху, но при помощи метода Reduce

const amount2 = people.reduce((total, person) => total + person.budget, 0)
// console.log(amount2);



// Find - Поиск
const alexander = people.find(person => person.name === 'Alexander')                    //  Поиск по имени  
console.log(alexander);


// FindIndex
const alexanderIndex = people.findIndex(person => person.name === 'Alexander')                    //  Получение индекса элемента  
console.log(alexanderIndex);

// ===========================================

const amount3 = people.filter(person => person.budget > 30000).map(person => {
    return {
        info: `${person.name} (${person.age})`,
        budget: Math.sqrt(person.budget)
    }
}).reduce((total, person) => total + person.budget, 0)
console.log(amount3);