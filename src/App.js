// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
import Table from './Table'


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
        <Table />
      </div>
    )
  }
}
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