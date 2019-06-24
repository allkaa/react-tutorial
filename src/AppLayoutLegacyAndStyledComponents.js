// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir

// npm install --save styled-components
import styled from 'styled-components'

// Define typography styles using styled components called with props:
// Works as style attribute for specific HTML element, not global CSS attribute.
const Title = styled.h1`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary === 'Y' ? "palevioletred" : "white"};
  color: ${props => props.primary === 'Y' ? "white" : "palevioletred"};
  font-size: 54px;
  font-weight: bold;`

// App is HOC (High Order Component) by extending React Component.
class App extends Component {

  // Declare state as Public field and it will be seen in constructor immediately (always present).
  // By declaring fields up-front with or without a default value,
  // class definitions become more self-documenting, and the fields are always present.
  // NB! Public and Private fields declaration is experimental and it works thru Babel compilation or on some browsers.
  /*
  state = {
    name: 'Dee',
    job: 'Aspring actress',
  }
  */

  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    console.log('App constructor initial props before super(props)')
    console.log(props)
    super(props) // call the super class constructor and pass in the props parameter
    console.log('App constructor initial props after super(props)')
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
    // {/*<img src={logo} alt="React Logo" className = 'logo' ></img>*/}
    // {/* <h1>Positioning</h1> */}
    // Below used <img src="long.jpg"/> element must be in public dir
    //<Title>Hello default World!</Title>
    //<Title primary>Hello pimary World!</Title>
  return (
    <div className="container">

      <h1>Initial h1</h1>
      <Title primary='N'>Hello default World!</Title>
      <Title primary='Y'>Hello pimary World!</Title>
      <h1>Last h1</h1>

<div className="wrapper">
  <div className="row">
    <div className="col">1</div>
    <div className="col">2</div>
    <div className="col">3</div>
    <div className="col">4</div>
    <div className="col">5</div>
    <div className="col">6</div>
    <div className="col">7</div>
    <div className="col">8</div>
    <div className="col">9</div>
    <div className="col">10</div>
    <div className="col">11</div>
    <div className="col">12</div>
  </div>
  <div className="row">
    <div className="col spanl">13</div>
    <div className="col spanc">14</div>
    <div className="col spanc">15</div>
    <div className="col spanr">16</div>    
  </div>
  <div className="row">
  <div className="col spanTC">3-13</div>
  <div className="col spanTC">3-14</div>
  </div>
</div>

    </div>
    )
  }
}

export default App