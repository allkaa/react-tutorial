// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir


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

///*
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
//*/

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
    div className="w3-container">
      <h1>My Page</h1>
    </div>
    </div>
    */
    /*<img src="img_car.jpg" alt="Car" style={wdth100}/>*/

    /*<!-- Navigation Bar -->*/
    /*
    <div className="navbar">
      <a href="#1">Link1</a>
      <a href="#2">Link2</a>
      <a href="#3">Link3</a>
      <a href="#4">Link4</a>
    </div>
    <nav>
      <a href="#1">Link1</a>
      <a href="#2">Link2</a>
      <a href="#3">Link3</a>
      <a href="#4">Link4</a>
    </nav>
    */

    // Declare inline styles used below:
    /*
    // style={ht200px}
    const ht200px = {
      height: '200px',
    };
    // style={ht60px}
    const ht60px = {
      height: '60px',
    };

    // style={wdth100}
    const wdth100 = {
      width: '100%',
    };
    */

    // style={bYp5px}
    const bWSp2px = {
      background: 'whitesmoke', padding: '2px',
    };
    // style={taCenter}
    const taCenter = {
      textAlign: 'center',
    };
    // style={floatLeft}
    const floatLeft = {
      float: 'left',
    };
    // style={floatLeft}
    const floatRight = {
      float: 'right',
    };
    // style={dispNone}
    const dispNone = {
      display: 'none',
      width: '100%',
    };

    function w3_open() {
      //document.getElementById("mySmallMenu").style.display = "none";
      //document.getElementById("MenuBar").style.width = "100%"; // 25%
      if (document.getElementById("MenuBar").style.display === "block") {
        document.getElementById("MenuBar").style.display = "none";
      }
      else { // document.getElementById("MenuBar").style.display === "none"
        document.getElementById("MenuBar").style.display = "block";
      }
    }
  
    function w3_close() {
      document.getElementById("MenuBar").style.display = "none";
      document.getElementById("mySmallMenu").style.display = "block";
    }

    return (
  <div className="container">

{/*</div><!-- Header -->*/}
{/*
<div className="header">
  <h1>My Website</h1>
  <p>With a <b>flexible</b> layout.</p>
</div>
*/}
{/*
<nav id="MenuBar" style={dispNone} >
    <button onClick={() => {w3_close()}}>Close &times;</button>
    <a href="#1">Link 1</a>
    <a href="#2">Link 2</a>
    <a href="#3">Link 3</a>
</nav>
*/}

{/*<!-- Note -->}
<div style={bWSp2px}>
  <h4 style={taCenter}>Resize the browser window to see the responsive effect.</h4>
</div>
*/}

<header>
  <h1>My Website</h1>
  <p onClick={() => {w3_open()}} id="mySmallMenu" style={floatLeft}>☰</p>
  <p className="lp">With a <b>flexible nav and row</b> and with <b>float images</b> layout.</p>

  <nav id="MenuBar" style={dispNone} >
  {/* 
  <div id="MenuBarCloseDiv" >
    <button id="MenuBarCloseBtn" type="button" onClick={() => {w3_close()}}>Close &times;</button>
  </div>
  */}
  <div className="MenuDrop"> {/* display: flex; flex-wrap: wrap; */}
    <a href="#1" className="linkbtn">Link 1</a> {/* width: 30%; */}
    {/*<a href="#2" className="linkbtn">Link 2</a>*/}
    <div className="dropdown"> {/* position: relative; width: 30%; */}
      {/* <button type="button" className="dropbtn">Dropdown button</button> */}
      <a href="#Drop1" className="dropbtn">Drop Button 1</a>
      <div className="dropdown-content"> {/* position: absolute; width: 100%; */}
        <a href="#1">Link 1-1</a>
        <a href="#2">Link 2-1</a>
        <a href="#3">Link 3-1</a>
      </div>
    </div>
    <div className="dropdown"> {/* position: relative; width: 30%; */}
      {/* <button type="button" className="dropbtn">Dropdown button</button> */}
      <a href="#Drop2" className="dropbtn">Drop Button 2</a>
      <div className="dropdown-content"> {/* position: absolute; width: 100%; */}
        <a href="#1">Link 1-2</a> {/* display: block; */}
        <a href="#2">Link 2-2</a>
        <a href="#3">Link 3-2</a>
      </div>
    </div>
  </div>
  </nav>
</header>

{/*<!-- The flexible grid (content) -->*/}
<div className="row">

<div className="side">
  <h2>About me</h2>
  <h3>Photo of me</h3>
  <div className="divSide">
    <img className="imgSide2" src="teddy-bear.jpg" alt="teddy-bear"></img>
    {/*<p>Short paragraph flex</p>*/}
    <p id="lastp" className="lp2">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
  </div>
  <h3>Photo of me2</h3>
  <img className="imgSide" src="teddy-bear.jpg" alt="teddy-bear"></img>
  <p id="lastp" className="lp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro </p>
  <h3>Photo of me3</h3>
  <img className="imgSide" src="teddy-bear.jpg" alt="teddy-bear"></img>
  <p>Short paragraph float</p>
  <p id="lastp" className="lp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
</div>
<div className="main">
  <h2>TITLE HEADING1</h2>
  <h3>Title description1</h3>
  <img className='imgMain' src="logo.png" alt="logo-png"></img>
  <p>short paragraph text1</p>
  <p id="lastp" className="lp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
  Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
  Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
  </p>
  <h2>TITLE HEADING2</h2>
  <h3>Title description2</h3>
  <img className='imgMain' src="logo.png" alt="logo-png"></img>
  <p id="lastp" className="lp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry
  </p>
  <h2>TITLE HEADING3</h2>
  <h3>Title description3</h3>
  <img className='imgMain' src="logo.png" alt="logo-png"></img>
  <p id="lastp" className="lp">Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
  Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
  Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.
  </p>
</div>

</div>

{/*<!-- Footer -->*/}
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