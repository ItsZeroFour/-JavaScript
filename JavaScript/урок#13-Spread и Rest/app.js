const citiesRussia = ['Moscow', 'Saint-Peterburg', 'Kazan', 'Novosibirsk']
const citiesEurope = ['Berlin', 'Praha', 'Paris']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPeterburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Praha: 3,
    Paris: 2
}

// Spread
// console.log(...citiesRussia);                                                       //  При помощи "..." мы можем развернуть массив и сделать его в виде строки
// console.log(...citiesEurope);

const allCities = [...citiesRussia, 'Vashington', ...citiesEurope]                     //   Объединение массивов
// const allCities = citiesEurope.concat(citiesRussia)                                 //   Объединение массивов

// console.log(allCities);



// ===================================================



// console.log(citiesRussiaWithPopulation);
// console.log({...citiesRussiaWithPopulation});                                        //   Spread
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation});
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation});



// ======================================================
// Practice



const numbers = [30, 45, 110]
// console.log(Math.max(50, 370, 450, 180)); 
// console.log(Math.max(...numbers));                                                   //   Получение максимального числа при помощи Spread
// console.log(Math.max.apply(null, numbers));                                          //   Получение максимального числа, но при помощи apply

const divs = document.querySelectorAll('div')
const nodes = [...divs]                                                                 //   Заключение всех дивов в массив

// console.log(divs, Array.isArray(divs));                                              //   Узнаем, что является массивом
// console.log(nodes, Array.isArray(nodes));                                            //   Узнаем, что является массивом
// console.log(nodes); 

// console.log(divs);
// console.log(divs.map());



// =========================================================
// Rest



function sum(a, b, ...Rest) {                                                           //    Запись оператора "Rest" (После "..." его можно назвать как угодно )
    // console.log(Rest);
    // return a + b
    return a + b + Rest.reduce((a, i) =>a + i, 0)                                       //    Суммирование всех элементов при помощи Rest
}

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Spread!!
// console.log(sum(...numbers2));



// ==========================================================



// const a = numbers2[0]
// const b = numbers2[1]

// const [a, b] = numbers2                                                                 //   Эдентичная запись сверху
const [a, b, ...other] = numbers2                                                          //   Запись при помощи Rest

console.log(a, b, other);

const person = {
    name: 'Alex',
    age: 18,
    city: 'Moscow',
    contry: 'Russia'
}

// const {name, age} = person
const {name, age, ...adress} = person                                                       //   Сборка всех остальных элементов в отдельный массив при помощи Rest

console.log(name, age, adress);
