// Traditional very first custom class component - App
// (capitalize custom components to differentiate them from regular HTML elements).
import React, { Component } from 'react'

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
    let one = document.querySelector('.one');
    let p1 = document.querySelector('#p1');

    let txt
    let width = one.offsetWidth;
    let height = one.offsetHeight;
    txt = 'Box with box-sizing:border-box Width: ' + width + 'px, Height: ' + height + 'px. ';
    width = p1.offsetWidth;
    height = p1.offsetHeight;
    txt = txt + 'For <p1> Width: ' + width + 'px, Height: ' + height + 'px. ';
    let p1i = document.querySelector('#p1info');
    p1i.textContent = txt

  }

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    //const { characters } = this.state
    // Render of re-render with Table and Form childs.
    console.log('========> App render <==========')
    return (
      <div className="container">
        {/*<Table characterData={this.state.characters} />*/}
        <h1>Box heights don't observe percentage lengths; box height always adopts the height of the box content, unless a specific absolute height is set (e.g. pixel-s or (r)em-s.)  </h1>
        <div className="one">
          <p id='p1'>Tabel test</p>
          <p id='p1info'>piInfo</p>
        </div>
        <br/>
        <article className="simple">
          <p><strong>Warning</strong>: The thermostat on the cosmic transcender has reached a critical level.</p>
        </article>
        <br/>
        <button>Press me!</button>
      </div>
    )}
}

export default App