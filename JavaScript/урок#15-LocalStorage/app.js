// С помощью localStorage можно синхранизировать одну страницу сайта с другой

const myNumber = 42

// localStorage.removeItem('number')
// console.log(localStorage.getItem('number')); 
// localStorage.setItem('number', myNumber.toString())
// console.log(localStorage.getItem('number')); 


// ==============================================================


const object = {
    name: 'Alex',
    age: 23
}

localStorage.setItem('person', JSON.stringify(object))

const raw = localStorage.getItem('person')
const person = JSON.parse(raw)
raw.name = 'Jacob'

// console.log(person);


// ===============================================================

// Что бы посмотреть результат, надо дублировать этоу страницу html и в первом написать: "localStorage.setItem('temp', Date.now().toString())"
// Потом зайти на дублированную страницу и посмотреть результат

window.addEventListener('storage', event => {
    console.log(event);
})

// window.onstorage = () => {}