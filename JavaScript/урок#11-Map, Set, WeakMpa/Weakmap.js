const { use } = require("express/lib/application")

// При помощи Weakmap можно избежать утечки данных
let obj = {name: 'Jacob'}

// const arr = [obj]

// obj = null
// console.log(obj);



// =================================


const map = new WeakMap([
    [obj, 'obj data']
])
// Методы WeakMap: get, set, delete, has

obj = null

// console.log(map.get(obj)); 

// ==================================
// Получение кеша пользователя

const cash = new WeakMap()

function cashUser(user) {
    if (!cash.has(user)) {
        cash.set(user, Date.now())
    }
    return cash.get(user)
}

let Alex = {name: 'Alex'}
let William = {name: 'William'}

cashUser(Alex)
cashUser(William)

Alex = null

console.log(cash.get(Alex));
console.log(cash.get(William));