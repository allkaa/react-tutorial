// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
import {useState} from 'react'; // import Hooks.

function Dog(props){

  // declaring a new state variable. Has 2 constants. 
  // One to name and the other to make changes to the state.
  console.log('========> Dog object dog <==========')
  //console.log(props)
  //console.log(props.dogInfoArr[0].name)
  //console.log(props.dogInfoArr[0].mode)
  let newName;
  //const [dog, setDog] = useState(props.dogInfoArr[0].name);
  const [dog, setDog] = useState(props.dogInfoArr[0]); // use imported Hooks useState() fuction.
  console.log(dog);
  //console.log(setDog.toString()); // // show function setDog source text or native code e.g. function () { [native code] }
  //console.log(setDog.toString); // show function toString native code e.g. f toString() { [native code] }
  if (dog.name  === props.dogInfoArr[0].name) {
    newName = {name: 'Bonny', mode: 'good'};
  }
  else if (dog.name === 'Bonny') {
    newName = {name: 'Claid', mode: 'bark'};
  }
  else if (dog.name === 'Claid') {
    newName = props.dogInfoArr[0];
  }

  // use imported Hooks setDog function.
  return ( 
    <div> 
      <p>{dog.name} goes {dog.mode}!</p>
      <button onClick={() => setDog(newName)}>Press me to change dog info</button>
    </div>
  )
} // End of Dog.

class App extends Component {
  // No constructor(props) initially - class declaration used:
  /*
  state = {infoArr: [
    {
      name: 'Max',
      mode: 'woof',
    },
  ]}
  */

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    super(props)
    console.log('App constructor props')
    console.log(props)

    console.log('App constructor this.state before')
    console.log(this.state)
    this.state = {infoArr: [
      {
        name: 'Max',
        mode: 'woof',
      },
    ]}
    console.log('App constructor this.state after')
    console.log(this.state)
  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    //console.log(Dog.toString()); // show function Dog source text (or native code)
    console.log('========> App render <==========')
    return (
      <div className="container">
        <Dog dogInfoArr={this.state.infoArr}/>
      </div>
    )
  }
}

export default App