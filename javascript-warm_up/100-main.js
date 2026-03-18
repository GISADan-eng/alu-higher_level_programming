/* global myVar:true */
require('./100-let_me_const'); // load the previous file

console.log(myVar); // using it counts as usage
myVar = 89; // modify if required by exercise
console.log(myVar);
