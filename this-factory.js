'use strict';

const proto = {
  name: '',
  drive () {
    console.log("log 'this' inside 'drive()' function");
    console.log(this);
    console.log("this instanceof Object:", this instanceof Object);
    console.log('Vroom!');
  }
};

function Car (options) {
  return Object.assign(proto, options);
}

const car = Car({name: 'Peugeot 206'});
car.drive();