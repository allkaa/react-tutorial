// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir

function noStyles() {
  document.styleSheets[0].disabled = true;
  document.styleSheets[1].disabled = true;
  document.styleSheets[2].disabled = true;
  document.styleSheets[3].disabled = true;
}

function reStyle(n) {
  noStyles()
  document.styleSheets[n].disabled = false;
}

// NB! On separate linked css files does not work.
function closeBlackdiv() { // called from showStyle(n) created background dimmed div onclick.
  let blackdiv, stylediv;
  blackdiv = document.getElementById("blackdiv")
  blackdiv.parentNode.removeChild(blackdiv);
  stylediv = document.getElementById("stylediv")
  stylediv.parentNode.removeChild(stylediv);
}

// NB! On separate linked css files does not work.
function showStyle(n) {
let div, text, blackdiv;
// create dimmed background.
blackdiv = document.createElement("div"); // div may be also used.
blackdiv.setAttribute("style","background-color:#000000;position:absolute;width:100%;height:100%;top:0;opacity:0.5;margin-left:-20px;");
blackdiv.setAttribute("id","blackdiv");
blackdiv.setAttribute("onclick","closeBlackdiv()");
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
}

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
    reStyle(0);
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

<div className="container wrapper">
<div id="top">
  <h1>Welcome to My Homepage</h1>
  <p>Use the menu to select different Stylesheets</p>
</div>
<div className="wrapper">
  <div id="menubar">
    <ul id="menulist">
      <li className="menuitem" onClick="reStyle(0)">Stylesheet 1</li>
      <li className="menuitem" onClick="reStyle(1)">Stylesheet 2</li>
      <li className="menuitem" onClick="reStyle(2)">Stylesheet 3</li>
      <li className="menuitem" onClick="reStyle(3)">Stylesheet 4</li>
      <li className="menuitem" onClick="noStyles()">No Stylesheet</li>
      <!-- NB! On separate linked css files does not work.
      <li className="menuitem" onClick="showStyle(0)">Show Style 1</li>
      <li className="menuitem" onClick="showStyle(1)">Show Style 2</li>
      <li className="menuitem" onClick="showStyle(2)">Show Style 3</li>
      <li className="menuitem" onClick="showStyle(3)">Show Style 4</li>
      -->
    </ul>
  </div>
  <div id="main">
    <h1>Same Page Different Stylesheets</h1>
    <p>This is a demonstration of how different stylesheets can change the layout of your HTML page. You can change the layout of this page by selecting different stylesheets in the menu, or by selecting one of the following links:
      <br/>
      <a href="#" onClick="reStyle(0);return false">Stylesheet1</a>,
      <a href="#" onClick="reStyle(1);return false">Stylesheet2</a>,
      <a href="#" onClick="reStyle(2);return false">Stylesheet3</a>,
      <a href="#" onClick="reStyle(3);return false">Stylesheet4</a>.
    </p>
    <h2>No Styles</h2>
    <p>This page uses DIV elements to group different sections of the HTML page. Click here to see how the page looks like with no stylesheet:
      <br/>
      <a href="#" onClick="noStyles();return false">No Stylesheet</a>.
    </p>
 </div>
  <div id="sidebar">
    <h3>Side-Bar</h3>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
  </div>
</div> {/* <!-- end of div className="wrapper" --> */}

<div id="bottom">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
</div>
</div> {/* <!-- end of div className="container wrapper" --> */}
      
    </div>
    )
  }
}

export default App