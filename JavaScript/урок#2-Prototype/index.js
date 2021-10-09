const Andrey = {
    name: 'Andrey',
    age: 35,
    greet: function() {
        console.log('Hello');
    }
}

const Jacob = new Object ({
    name: 'Jacob',
    age: 39,
    greet: function() {
        console.log('Hello');
    }
})

Object.prototype.seyHello = function() {
    console.log('Hello');
}

const Alexander = Object.create(Jacob)
Alexander.name = 'Alexander'

const str = new String('I am string')