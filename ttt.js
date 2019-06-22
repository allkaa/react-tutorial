'use strict';

console.log(process.version)

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

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Basic document flow</title>

    <style>
      body {
        width: 500px;
        margin: 0 auto;
      }

      p {
        background: aqua;
        border: 3px solid blue;
        padding: 10px;
        margin: 10px;
      }

      span {
        background: red;
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <h1>Basic document flow</h1>
    <p>I am a basic block level element. My adjacent block level elements sit on new lines below me.</p>
    <p>By default we span 100% of the width of our parent element, and our are as tall as our child content. Our total width and height is our content + padding + border width/height.</p>
    <p>We are separated by our margins. Because of margin collapsing, we are separated by the width of one of our margins, not both.</p>
    <p>inline elements <span>like this one</span> and <span>this one</span> sit on the same line as one another, and adjacent text nodes, if there is space on the same line. Overflowing inline elements <span>wrap onto a new line if possible — like this one containing text</span>, or just go on to a new line if not, much like this image will do: <img src="long.jpg"></p>
  </body>
</html>

GridTemplateArea
CssGrid
Floats
Positioning2
*/