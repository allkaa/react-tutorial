// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
import {useState} from 'react';

function Dog(props){

  // declaring a new state variable. Has 2 constants. 
  // One to name and the other to make changes to the state.
  console.log('========> Dog starts <==========')
  //console.log(props)
  //console.log(props.dogInfoArr[0].name)
  //console.log(props.dogInfoArr[0].mode)
  let newName;
  const [dog, setDog] = useState(props.dogInfoArr[0].name);
  if (dog  === props.dogInfoArr[0].name) {
    newName = 'Bonny';
  }
  else if (dog === 'Bonny') {
    newName = 'Claid';
  }
  else if (dog === 'Claid') {
    newName = props.dogInfoArr[0].name;
  }

  return ( 
    <div> 
      <p>{dog} goes woof!</p>
      <button onClick={() => setDog(newName)}>Press me to change name</button>
    </div>
  )
} // End of Dog.

class App extends Component {
  // No constructor(props) initially - class declaration used:
  /*
  state = {infoArr: [
    {
      name: 'Max',
      mode: 'Wicked',
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
        mode: 'Wicked',
      },
    ]}
    console.log('App constructor this.state after')
    console.log(this.state)
  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    console.log('========> App render <==========')
    return (
      <div className="container">
        <Dog dogInfoArr={this.state.infoArr}/>
      </div>
    )
  }
}

export default App