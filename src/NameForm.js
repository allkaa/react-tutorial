// NB! Capitalize custom components name to differentiate them from regular HTML elements).
import React, { Component } from 'react'

// Custom Controlled Component:
class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'alex'}; // very initial value.

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> NameForm componentDidMount <==========')
    console.log(this.state.value);
    this.setState({value: this.state.value.toUpperCase()})
    console.log(this.state.value);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({value: event.target.value.toUpperCase()});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        <div>
          <label htmlFor="name">>Name: <abbr title="required">*</abbr> </label>
          <input type="text" id="name" name="user_name"  value={this.state.value} onChange={this.handleChange}></input> {/*  value="default value" */}
        </div>
        <div className="button">
          <button type="submit">Send your message</button>
        </div>
        {/*
        <label>
          Name:
          <input type="text" id="name" name="user_name"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        */}

      </form>
    );
  }
}

export default NameForm