//import React, { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
//import './index.css'
import './styleCards.css'
//import App from './AppInitial'
//import App from './App'
//import App from './Api'
//import App from './ApiXhr'
//import App from './ApiCardsFetch'
import App from './ApiCardsXhr'
/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
*/

ReactDOM.render(<App />, document.getElementById('root'))