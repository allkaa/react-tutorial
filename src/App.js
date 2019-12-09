import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

class App extends Component {
  constructor() {
     super();
     this.state = {
        data: []
     }
     this.setStateHandler = this.setStateHandler.bind(this);
     this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
     this.findDomNodeHandler = this.findDomNodeHandler.bind(this);
  };
  setStateHandler() {
     let item = 'SetStateClick...';
     let myArray = this.state.data.slice();
     myArray.push(item);
     this.setState({data: myArray})
  };
  forceUpdateHandler() {
    this.forceUpdate();
  };
  findDomNodeHandler() {
    let myNode = document.getElementById('myDiv');
    ReactDOM.findDOMNode(myNode).style.color = 'green';
 }

  render() {
    return (
      <div>
        <button onClick = {this.setStateHandler}>SET STATE</button>
        <h4>State Array: {this.state.data}</h4>
        <button onClick = {this.forceUpdateHandler}>FORCE UPDATE</button>
        <h4>Random number: {Math.random()}</h4>        
        <button onClick = {this.findDomNodeHandler}>FIND DOM NODE and set green colour</button>
        <div id = "myDiv">NODE</div>
      </div>
    );
  }
}

/*
App.defaultProps = {
  //propArray: 3,
  propBool: true,
  propFunc: function (e) { return e },
  propNumber: 1,
  propString: "String value...",
  propObject: 'sting as object'
};
*/

export default App;