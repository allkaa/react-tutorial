// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg';

class App extends Component {

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    super(props)
    console.log('App constructor initial props')
    console.log(props)

    console.log('App constructor this.state before settings test data')
    console.log(this.state)
    this.state = {characters: [
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
    ]}
    console.log('App constructor this.state after settings test data')
    console.log(this.state)
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> App componentDidMount <==========')
  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    console.log('========> App render <==========')
    // {//<img src={logo} alt="React Logo" className = 'logo' ></img>}
    return (
      <div className="container">
        {/*<img src='/logoFancyLetter.png' alt="React Logo" className = 'logo' ></img>*/}
        <article>
          <h1>
            Awesome<br/>Company
          </h1>
          <address>
            <p>The Awesome Company</p>
            <p>102-112 Frail Bend Bridge<br/>
            The Dwindlings<br/>
            Little Hornet<br/>
            HX3 9ZQ<br/>
            UK
            </p>
          </address>
        </article>      
      </div>
    )}
}

export default App