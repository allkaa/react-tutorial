// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir

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

    /*
    // Declare inline styles used below:
    // style={bYp5px}
    const bYp5px = {
      background: 'yellow', padding: '5px',
    };
    // style={taCenter}
    const taCenter = {
      textAlign: 'center',
    };
    // style={ht200px}
    const ht200px = {
      height: '200px',
    };
    // style={ht60px}
    const ht60px = {
      height: '60px',
    };
    */

    return (
    <div className="container">

{/* 
<div className="header">
  <h1>My Website</h1>
  <p>A website created by me.</p>
</div>
*/}
<header>
  <h1>My Website</h1>
  <p>A website created by me.</p>
</header>

{/*
<div className="navbar">
  <a href="#1">Link1</a>
  <a href="#2">Link2</a>
  <a href="#3">Link3</a>
  <a href="#4" className="right">Link4</a>
</div>
*/}
<nav>
  <a href="#1">Link1</a>
  <a href="#2">Link2</a>
  <a href="#3">Link3</a>
  <a href="#4" className="right">Link4</a>
</nav>

<div className="row">

  <div className="side">
    <h2>About me</h2>
    <h3>Photo of me</h3>
    <img className="imgSide" src="teddy-bear.jpg" alt="teddy-bear"></img>
    <p id="lastp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
    <h3>Photo of me2</h3>
    <img className="imgSide" src="teddy-bear.jpg" alt="teddy-bear"></img>
    <p id="lastp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro </p>
    <h3>Photo of me3</h3>
    <img className="imgSide" src="teddy-bear.jpg" alt="teddy-bear"></img>
    <p id="lastp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
  </div>
  <div className="main">
    <h2>TITLE HEADING</h2>
    <h3>Title description</h3>
    <img className='imgMain' src="logo.png" alt="logo-png"></img>
    <p>short paragraph text</p>
    <p id="clealastpred">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
    Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
    Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
    </p>
    <h2>TITLE HEADING2</h2>
    <h3>Title description2</h3>
    <img className='imgMain' src="logo.png" alt="logo-png"></img>
    <p id="lastp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry
    </p>
    <h2>TITLE HEADING3</h2>
    <h3>Title description3</h3>
    <img className='imgMain' src="logo.png" alt="logo-png"></img>
    <p>short paragraph text</p>
    <p id="lastp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
    Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
    Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
    </p>
  </div>

</div>

{/*
<div className="footer">
  <h2>Footer</h2>
</div>
*/}
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>

    </div>
    )
  }
}

export default App