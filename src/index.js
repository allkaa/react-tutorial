//import React, { Component } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'

// styles css files will be loaded as <style> inside <head>
//import './index.css'
//import './styleCards.css'
//import './styleCollege.css'
//import './styleBoxes.css'
//import './styleBoxesAdv.css'
import './styleBoxesBackground.css'

//import App from './AppInitial'
//import App from './App'
//import App from './Api'
//import App from './ApiXhr'
//import App from './ApiCardsFetch'
//import App from './ApiCardsXhr'
//import App from './AppCollege'
//import App from './AppBoxes'
//import App from './AppBoxesAdv'
import App from './AppBoxesBackground'

/*
// A class component must include render(), and the return statement can only return ONE parent element:
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