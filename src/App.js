import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

class App extends Component {
   constructor(props) {
      super(props);
      this.temp = ''
      this.state = {
         data: 'Change the Initial data...'
      }
      this.updateTemp = this.updateTemp.bind(this);
      this.updateState = this.updateState.bind(this);
   };
   updateTemp(e) {
      this.temp = e.target.value;
      //console.log(this.temp);
   }
   updateState(e) {
      //console.log('updateState')
      //this.setState({data: e.target.value});
      //console.log(this.temp);
      this.setState({data: this.temp});
      //e.preventDefault();
   }
   render() {
      return (
         <div>
            <Content myDataProp = {this.state.data} updateTempVar = {this.updateTemp} updateStateProp = {this.updateState} ></Content>
         </div>
      );
   }
}

class Content extends Component {
   render() {
      return (
         <div>
            <input type = "text" defaultValue = '' onChange = {this.props.updateTempVar}
               /> {/* value = {this.props.myDataProp} onChange = {this.props.updateStateProp}  */}
            <input type = "button" value = 'Press to update!' onClick = {this.props.updateStateProp} />
            <h3>{this.props.myDataProp}</h3>
         </div>
      );
   }
}

export default App;  