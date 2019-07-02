// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir

/*
function noStyles() {
  //console.log(`noStyles started`)
  document.styleSheets[0].disabled = true;
  document.styleSheets[1].disabled = true;
  document.styleSheets[2].disabled = true;
  document.styleSheets[3].disabled = true;
  console.log(`noStyles finished`)
}

function reStyle(n) {
  //console.log(`reStyle ${n} started`)
  noStyles()
  document.styleSheets[n].disabled = false;
  console.log(`reStyle ${n} finished`)
}
*/

/*
// NB! On separate linked css files does not work.
function closeBlackdiv() { // called from showStyle(n) created background dimmed div onclick.
  console.log(`closeBlackdiv started`)
  let blackdiv, stylediv;
  blackdiv = document.getElementById("blackdiv")
  blackdiv.parentNode.removeChild(blackdiv);
  stylediv = document.getElementById("stylediv")
  stylediv.parentNode.removeChild(stylediv);
  console.log(`closeBlackdiv finished`)
}

// NB! On separate linked css files does not work.
function showStyle(n) {
  console.log(`showStyles ${n} started`)
  let div, text, blackdiv;
  // create dimmed background.
  blackdiv = document.createElement("div"); // div may be also used.
  blackdiv.setAttribute("style","background-color:#000000;position:absolute;width:100%;height:100%;top:0;opacity:0.5;margin-left:-20px;");
  blackdiv.setAttribute("id","blackdiv");
  //blackdiv.setAttribute("onclick","closeBlackdiv()"); // do NOT work in React.
  //blackdiv.onclick = closeBlackdiv; // OK works - do NOT use closeBlackdiv() !!!
  blackdiv.addEventListener("click", closeBlackdiv, false);  // OK works - do NOT use closeBlackdiv() , false is default btw.
  document.body.appendChild(blackdiv);
  // create stylesheet source text window.
  div = document.createElement("DIV");
  div.setAttribute("id","stylediv");
  div.setAttribute("style","background-color:#ffffff;padding-left:5px;position:absolute;width:auto;height:auto;top:100px;bottom:50px;left:200px;right:200px;overflow:auto;font-family: monospace; white-space: pre;line-height:16px;");
  // NB! On separate linked css files does not work.
  text = document.createTextNode(document.getElementsByTagName("STYLE")[n].innerHTML); // "style" may be also used.
  div.appendChild(text);
  document.body.appendChild(div);
  alert('Click on dimmed background to close style source text window created next.');
  console.log(`showStyles ${n} finished`)
}
*/

/*
function w3_open() {
  document.getElementById("mySidebar").style.width = "25%";
  document.getElementById("mySidebar").style.display = "block";
}
function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
*/

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
    //reStyle(0);
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
    

    // style={dispNone}
    const dispNone = {
      display: 'none',
    };
    
    // style={wdth100}
    const wdth100 = {
      width: '100%',
    };
    */

/*<!-- Sidebar --> w3-sidebar w3-bar-block w3-border-right
<div className="w3-sidebar w3-bar-block w3-border-right" style={dispNone} id="mySidebar">
  <button onClick={() => {w3_close()}} className="w3-bar-item w3-button w3-large">Close &times;</button>
  <a href="#1" className="w3-bar-item w3-button">Link 1</a>
  <a href="#2" className="w3-bar-item w3-button">Link 2</a>
  <a href="#3" className="w3-bar-item w3-button">Link 3</a>
</div>
 */
/*<!-- Page Content -->
<div className="w3-teal">
  <button className="w3-button w3-teal w3-xlarge" onClick={() => {w3_open()}}>☰</button>
  <div className="w3-container">
    <h1>My Page</h1>
  </div>
</div>
*/
/*<img src="img_car.jpg" alt="Car" style={wdth100}/>*/

    return (
    <div className="container">
    <h1>How To sample</h1>


      
    </div>
    )
  }
}

export default App