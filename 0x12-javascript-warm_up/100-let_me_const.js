#!/usr/bin/node
myVar = 89;  // Initialize myVar
require('./100-let_me_const')  // Require the module that changes myVar
console.log(myVar);  // Output the new value of myVar
