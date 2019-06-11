'use strict';

function enclosedFunction() {
  let counter = 0;
  let Increment = function () {
    counter++;
    console.log(counter);
  }
  return { Increment } // must be - declare Increment property (method).
}

let countMe = enclosedFunction() // <=== NB! Crucial point - create instance of enclosedFunction() in var countMe.
countMe.Increment(); // use instance countMe method Increment() that in turn use var counter in closure of instance.
countMe.Increment()

return 0;

/* Writing closures is more than just the act of putting a function inside another function.
 It is the technique used to create variables that are protected against external change,
  truly isolated from the rest of the application and are persistently stateful. */