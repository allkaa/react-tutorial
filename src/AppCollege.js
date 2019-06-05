// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'

class App extends Component {
  // No constructor(props) initially class declaration used
  /*
  state = {characters: [
    {
      name: 'Dee',
      job: 'Aspring actress',
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
    this.state = {characters: [
      {
        name: 'Dee',
        job: 'Aspring actress',
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
        {/*<Table characterData={this.state.characters} />*/}
        {/*<Table characterData={this.state.characters} removeRow={this.removeRow} />*/}
        <h1>Hello, React from AppCollege.js file with export default App!</h1>
      </div>
    )
  }
}

/*
class App extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'MacDuck',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}
*/
//class App extends Component {
//  render() {
//    return (
      /*
      <div className="App">
        <h1>Hello, React from App.js file with export default App!</h1>
      </div>
      */
//      <div className="container">
//        <Table />
//      </div>
//    )
//  }
//}


export default App