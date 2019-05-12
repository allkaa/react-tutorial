// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

  /*
  state = { characters: [
    {
      name: 'Charlie',
      job: 'Janitor',
    },
    {
      name: 'MacDuck2',
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
  ]}
  */
 class App extends Component {
  // No constructor(props) initially used
  state = {characters: []}

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    super(props)
    console.log('App constructor props')
    console.log(props)

    console.log('App constructor this.state')
    console.log(this.state)
  }

  removeRow = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((row_object, i) => {
        return i !== index
      }),
    })
    console.log('App removeRow event')
    console.log(this.state)
  }  

  handleFormSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
    console.log('App handleFormSubmit event')
    console.log(this.state)
  }

  render() {
    //const { characters } = this.state

    return (
      <div className="container">
        {/*<Table characterData={this.state.characters} />*/}
        {/*<Table characterData={this.state.characters} removeRow={this.removeRow} />*/}
        <Table characterData={this.state.characters} removeRow={this.removeRow} />
        <Form handleSubmit={this.handleFormSubmit} />
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