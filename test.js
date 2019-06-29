'use strict';

class My_Event_Target_class extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new My_Event_Target_class(5);
let value = myEventTarget.secret;  // == 5
console.log(value);

myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 }); // Name of the event ("foo") and CustomEventInit dictionary, having
// the following fields:
// "detail", optional and defaulting to null, of type any, that is an event-dependent value associated with the event.
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
console.log(newValue);
