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

<h1>Simple float example</h1>
<div class="box">Float</div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

*/