'use strict';

function Car (name) {
  this.name = name;
}

Car.prototype.drive = function () {
  console.log("log 'this' inside 'drive()' function");
  console.log(this);
  console.log("this instanceof Car:", this instanceof Car);
  console.log('Vroom!');
};

const car = new Car('Peugeot 206');
car.drive();