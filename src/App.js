import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

class App extends Component {
  constructor(props) {
     super(props);
     
     this.state = {
        data: 0
     }
     this.setNewNumber = this.setNewNumber.bind(this)
  };
  setNewNumber() {
     this.setState({data: this.state.data + 1})
  }
  render() {
     return (
        <div>
           <button onClick = {this.setNewNumber}>INCREMENT</button>
           <Content myNumber = {this.state.data}></Content>
        </div>
     );
  }
}

class Content extends React.Component {
  componentWillMount() {
     console.log('Component Content WILL MOUNT!')
  }
  componentDidMount() {
     console.log('Component Content DID MOUNT!')
  }
  componentWillReceiveProps(newProps) {    
     console.log('Component Content WILL RECIEVE PROPS!')
  }
  shouldComponentUpdate(newProps, newState) {
    let blnUpdate = true; // or false to reject updates,
    console.log('Component Content CAN UPDADTE: ' + blnUpdate);
     return blnUpdate;
  }
  componentWillUpdate(nextProps, nextState) {
     console.log('Component Content WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
     console.log('Component Content DID UPDATE!')
  }
  componentWillUnmount() {
     console.log('Component Content WILL UNMOUNT!')
  }
  render() {
    return (
       <div>
          <h3>{this.props.myNumber}</h3>
       </div>
    );
 }
}
export default App;  