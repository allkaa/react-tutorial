import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';

//const myRef = React.createRef(); // create empty ref construction.
class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: ''
      }
      this.myRef = React.createRef(); // create empty ref construction.
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput() {
      this.setState({data: ''});
      this.myRef.current.focus(); // does NOT work ref to <input .../> is used to set focus, ref set in <input .../>
      //ReactDOM.findDOMNode(this.refs.myInput).focus(); // ref to <input .../> is used to set focus, ref set in <input .../>
   }
   render() {
      return (
         <div>
            <input value = {this.state.data} onChange = {this.updateState} ref = {this.myRef}></input>
            {/*<input value = {this.state.data} onChange = {this.updateState} ref = "myInput"></input>*/}
            <button type="button" onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}

export default App;

// Create a ref in constructor to the DOM node to access file(s) in a submit handler:
/*
    this.fileInput = React.createRef();
*/
// In render return() set <input> ref
/*
        <div>
          <label htmlFor="file_name">Upload file:: <abbr title="required">*</abbr> </label>
          <input type="file" id="file_name" ref={this.fileInput} />
        </div>
*/
// In handleSubmit(event) use created ref to the DOM node to access file(s) in a submit handler:
/*
    alert(
      `Selected file to upload - ${
        this.fileInput.current.files[0].name
      }`
    );
*/
