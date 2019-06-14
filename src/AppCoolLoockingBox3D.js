// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir

class App extends Component {

  // Declare state as Public field and it will be seen in constructor immediately (always present).
  // By declaring fields up-front with or without a default value,
  // class definitions become more self-documenting, and the fields are always present.
  // NB! Public and Private fields declaration is experemengal and it works thru Babel compilation.
  /*
  state = {
    name: 'Dee',
    job: 'Aspring actress',
  }
  */

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    super(props)
    console.log('App constructor initial props')
    console.log(props)

    console.log('App constructor this.state before settings test data')
    console.log(this.state)
    // Declare state in constructor /*
    this.state = {
        name: 'Dee',
        job: 'Aspring actress',
      }
    //*/
    console.log('App constructor this.state after settings test data')
    console.log(this.state)
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> App componentDidMount <==========')
  }

  handleOnClick = event => {
    console.log('App handeChange event event.target')
    console.log(event.target)
    
    let nameToggle
    if (this.state.name === 'Alex') {
      nameToggle = 'Alex2'
    }
    else {
      nameToggle = 'Alex'
    }
    console.log('App handleOnClick event this.state before setting event {name: value}')
    console.log(this.state)
    this.setState({ // set App this.state asyn and trigger re-rendering with childs.
      name: nameToggle, job: 'SW Engineer'
    })
    console.log('App handleOnClick event this.state after asyn setting event {name: value}')
    console.log(this.state)
    //console.log('App handleOnClick event this.initialState')
    //console.log(this.initialState)
  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    console.log('========> App render <==========')
    // {/*<img src={logo} alt="React Logo" className = 'logo' ></img>*/}
    return (
      <div className="container">
        {/*<img src={logo} alt="React Logo" className = 'logo' ></img>*/}
        <div id="box3D" onClick={this.handleOnClick} >This is a cool box</div>
        <br/>
        <div id="dName">{this.state.name}</div>
        <br/>
        <div id="dJob">{this.state.job}</div>
      </div>
    )}
}

export default App