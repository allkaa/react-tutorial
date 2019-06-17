'use strict';

console.log(process.version)

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

/*

<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Flexbox align 0 — starting code</title>
    <style>
      html {
        font-family: sans-serif;
      }

      body {
        width: 70%;
        max-width: 960px;
        margin: 20px auto;
      }

      button {
        font-size: 18px;
        line-height: 1.5;
        width: 15%;
      }

      div {
        height: 100px;
        border: 1px solid black;
      }
  
     </style>
  </head>

  <body>
        <div>
          <button>Smile</button>
          <button>Laugh</button>
          <button>Wink</button>
          <button>Shrug</button>
          <button>Blush</button>
        </div>
  </body>
</html>

*/