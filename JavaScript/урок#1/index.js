let array = [1, 2, 3, 4, 5 ,6, 7, 8, 9, 10]
let newArray = []
let counter = 0

// forEach
array.forEach(function(elem) {
    newArray.push(elem *= elem) //Возведение в квадрат
    // counter += elem
})

console.log(newArray);

// =================================================================
let getNames = function(elem){
    newArray.push(elem.name)
}

// forEach()
response.forEach(getNames)
console.log(newArray);