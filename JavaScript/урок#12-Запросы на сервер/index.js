const requestURL = 'https://jsonplaceholder.typicode.com/users'

// xhr
function sendRequest(method, url, body = null) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()

        xhr.open('GET', requestURL)

        xhr.responseType = 'json'
        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.onload = () => {
            if (xhr.status >= 400) {
            reject(xhr.response);
            } else {
                console.log(xhr.response);
            }

    }

        xhr.onerror = () => {                                                           //  Если будет ошибка, ты мы дудем попадать в эту функцию
            reject(xhr.response);
        }

        xhr.send(JSON.stringify(budy))                                                                      //  Отправляем запрос

    })

}

// sendRequest('GET', requestURL)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

const body = {
    name: 'Alex',
    age: 18
}

sendRequest('POST', requestURL, body)
    .then(data => console.log(data))
    .catch(err => console.log(err))

// ===================================
