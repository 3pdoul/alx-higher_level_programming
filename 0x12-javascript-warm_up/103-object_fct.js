#!/usr/bin/node
const myObject = {
  type: 'object',
  value: 12,
  incr: function() {
    this.value++;
  }
};

console.log(myObject);  // Initial state of the object

myObject.incr();
console.log(myObject);  // After first increment

myObject.incr();
console.log(myObject);  // After second increment

myObject.incr();
console.log(myObject);  // After third increment
