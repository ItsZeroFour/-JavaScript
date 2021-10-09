const { use } = require("express/lib/application")

const obj = {
    name: 'Alex',
    age: 19,
    job: 'Fullstack'
}

const entries = [
    ['name', 'Alex'],
    ['age', '19'],
    ['job', 'Fullstack']
]

// console.log(Object.entries(obj));                               //  Выводит объект в виде массива
// console.log(Object.fromEntries(entries));                       //  Выводит как обычный объект


// MAP

const map = new Map(entries)
// console.log(map);
// console.log(map.get('job'));                                       //   Пишем ключ, который хотим получить

map
.set('newField', 31)
.set(obj, 'Value of object')
.set(NaN, 'NaN ??')
// console.log(map);
// console.log(map.get(obj));
// console.log(map.get(NaN));

// map.delete('job')                                                    //   Удаление элемента
// console.log(map.has('job'));                                         //   Проверка наличия элемента
// console.log(map.size);                                               //   Количество элементов

// map.clear()                                                          //   Очищаем объект
// console.log(map.size);



// =========================================



for (let entry of map.entries()) {                                      //   Вывод ключей и значений из массива
    // console.log(entry);
}

for (let val of map.values()) {                                        //    Вывод ТОЛЬКО значений из массива                
    // console.log(val);
}

for (let key of map.keys()) {                                          //    Вывод ТОЛЬКО ключей из массива
    // console.log(key);
}

map.forEach((val, key, m) => {                                        //     Вывод ключей и значение при помощи forEach
    // console.log(key, val);
})



// =========================================


const array = [...map]
// console.log(array);

const arr = Array.from(map)                                          //      Аналог записи свыше
// console.log(arr);


const mapObj = Object.fromEntries(map.entries())
// console.log(mapObj)



// =========================================

// Создание даты получения

const users = [
    {name: 'Jacob'},
    {name: 'Alexander'},
    {name: 'William'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[1]));
console.log(lastVisit(users[2]));