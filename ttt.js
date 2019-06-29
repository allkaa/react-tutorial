'use strict';

console.log(process.version)

const myEventTargetBase = new EventTarget;

class MyEventTarget extends EventTarget {
  constructor(mySecret) {
    super();
    this._secret = mySecret;
  }

  get secret() { return this._secret; }
};

let myEventTarget = new MyEventTarget(5);
let value = myEventTarget.secret;  // == 5
console.log(value);

myEventTarget.addEventListener("foo", function(e) {
  this._secret = e.detail;
});

let event = new CustomEvent("foo", { detail: 7 });
myEventTarget.dispatchEvent(event);
let newValue = myEventTarget.secret; // == 7
console.log(newValue);

return 0;
/*
// This is a first-order function (FOF) later used as component:
// it takes one argument (a props object) and returns a template literal string.
const details = ({ name, randomNum }) =>
  `${name}, ${randomNum}`
// return string e.g. "alex, 123"
//console.log(details({name: 'alex', randomNum: 123}));

// This is a higher-order function (HOF):
// it takes in a function (the component, which it then calls, passing in additional props).
// This is an extremely basic example of what every stateless React component is doing.
const hoc = (component, props) => {
  const randomNum = Math.floor(Math.random() * 100) // e.g. 18
  // spread syntax to be expanded in places where zero or more arguments (for function calls)
  // name: "Julia" in final object will be extracted from props object {name: "Julia"}
  // randomNum = 18 will be transformed to randomNum: 18 in final object.
  let ttt = {...props, randomNum}
  console.log(ttt)
  return component({ ...props, randomNum })
}
let ttt = hoc(details, {name: 'Julia'})
console.log(ttt) // e.g. "Julia, 18"

return 0;
*/

/*
//var txt = '';
let data = [['title0','descrip0'], ['title1','descrip1'], ['title2','descrip2']];
data.forEach((movie, index, array) => {
  console.log(movie[0])
  console.log(movie[1])
});
*/

/*
let data = [['title0','descrip0'], ['title1','descrip1'], ['title2','descrip2']];
// pass a function to map
const result = data.map((movie,index, array) => {
  return (
    `<div className = 'card'><h1>${movie[0]}</h1><p>${movie[1]}</p></div>`
  )
});

console.log(result);
// expected output: Array [2, 8, 18, 32]
*/

// Private fields declaration (experimental)
/*
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {    
    this.#height = height;
    this.#width = width;
  }
}
*/

// Public fields declaration also expiremental.
class Rectangle {
  //height = 0;
  //width;
  constructor(h, w) {    
    this.height = h;
    this.width = w;
  }
}

let square = new Rectangle(10,10);
console.log(square.height, square.width)
console.log(square);

/* BasedPlacement
Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.

const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}

GridTemplateArea
CssGrid
Floats
Positioning2
Multi-column-layout
Legacy
StyleSheetsDemo
*/