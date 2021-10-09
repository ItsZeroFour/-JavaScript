const set = new Set([1, 2, 3, 4, 2, 3, 4, 1, 1 ])
// console.log(set);                                                    //  При вызове функции, Set убирает все числа, которые дублируются

set.add(10).add(20).add(30).add(20)                                     //  Добавление чисел в массив
// console.log(set);
// console.log(set.has(20));                                            //  Проверка наличия элемента
// console.log(set.has(100));
// console.log(set.size);                                               //  Подсчет колличества элементов в маасиве
// console.log(set.delete(1));                                          //  Удаляем элемент
// console.log(set.size); 
// console.log(set.clear());                                            //  Очищаем массив
// console.log(set.size);                                                               


// console.log(set.values());
// console.log(set.keys);
// console.log(set.entries());                                          //  Получение элемента из массива, но ключ и значение дублируются

for (let key of set) {                                                  //  Получение значений из массива
    // console.log(key);
}



// ==========================================

function unitValues(array) {                                            //  Отбираем только уникальные элементы из массиваw
    return Array.from(new Set (array))
}

console.log(unitValues([1, 1, 2, 2, 3, 4, 5, 5]));