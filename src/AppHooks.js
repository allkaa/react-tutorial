// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
import {useState} from 'react'; // import Hooks.

function Dog(props){
  // Declaring a new Hooks state with 2 constants. 
  // One to dog info object and the other function to make changes to the state.
  const [dog, setDog] = useState(props.dogInfoArr[0]); // use Hooks useState() function and set const dog and setDog.
  let newInfo;
  if (dog.name  === props.dogInfoArr[0].name) {
    newInfo = {name: 'Bonny', mode: 'good'};
  }
  else if (dog.name === 'Bonny') {
    newInfo = {name: 'Claid', mode: 'bark'};
  }
  else if (dog.name === 'Claid') {
    newInfo = props.dogInfoArr[0];
  }

  // use imported Hooks setDog function.
  return ( 
    <div> 
      <p>{dog.name} goes {dog.mode}!</p>
      <button onClick={() => setDog(newInfo)}>Press me to change dog info</button>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    // Initial info array about dog.
    this.state = {infoArr: [
      {
        name: 'Max',
        mode: 'woof',
      },
    ]}
  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    return (
      <div className="container">
        <Dog dogInfoArr={this.state.infoArr}/>
      </div>
    )
  }
}

export default App