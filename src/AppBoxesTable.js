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
      <table>
      <caption>A summary of the UK's most famous punk bands</caption>
      <thead>
        <tr>
          <th scope="col">Band</th>
          <th scope="col">Year formed</th>
          <th scope="col">No. of Albums</th>
          <th scope="col">Most famous song</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Buzzcocks</th>
          <td>1976</td>
          <td>9</td>
          <td>Ever fallen in love (with someone you shouldn't've)</td>
        </tr>
        <tr>
          <th scope="row">The Clash</th>
          <td>1976</td>
          <td>6</td>
          <td>London Calling</td>
        </tr>
        <tr>
          <th scope="row">The Damned</th>
          <td>1976</td>
          <td>10</td>
          <td>Smash it up</td>
        </tr>
        <tr>
          <th scope="row">Sex Pistols</th>
          <td>1975</td>
          <td>1</td>
          <td>Anarchy in the UK</td>
        </tr>
        <tr>
          <th scope="row">Sham 69</th>
          <td>1976</td>
          <td>13</td>
          <td>If the kids are united</td>
        </tr>
        <tr>
          <th scope="row">Siouxsie and the Banshees</th>
          <td>1976</td>
          <td>11</td>
          <td>Hong Kong Garden</td>
        </tr>
        <tr>
          <th scope="row">Stiff Little Fingers</th>
          <td>1977</td>
          <td>10</td>
          <td>Suspect Device</td>
        </tr>
        <tr>
          <th scope="row">The Stranglers</th>
          <td>1974</td>
          <td>17</td>
          <td>No More Heroes</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th scope="row"></th>
          <td>TOTAL</td>
          <td>77</td>
          <td></td>
        </tr>
      </tfoot>
      </table>
        </div>
      </div>
    )}
}

export default App