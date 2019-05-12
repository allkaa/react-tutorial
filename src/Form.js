'use strict' // use strict is unnecessary inside of modules.
import React, { Component } from 'react'

class Form extends Component {
  // We'll need the constructor() to use `this`, and to receive the props of the parent.
  constructor(props) {
    super(props)
    console.log('Form constructor props')
    console.log(props)

    this.initialState = {
      name: '',
      job: '',
    }

    console.log('Form constructor this.state before')
    console.log(this.state)
    this.state = this.initialState // set parent props state?????
    console.log('Form constructor this.state after')
    console.log(this.state)
  }

  handleChange = event => {
    const { name, value } = event.target
  
    this.setState({
      [name]: value,
    })
    console.log('Form handeChange event this.state')
    console.log(this.state)
    console.log('Form handeChange event this.initialState')
    console.log(this.initialState)
  }

  submitForm = () => {
    this.props.handleSubmit(this.state)
    this.setState(this.initialState)
    console.log('Form submitForm event this.state')
    console.log(this.state)
    console.log('Form submitForm event this.initialState')
    console.log(this.initialState)
  }

  render() {
    const { name, job } = this.state;
  
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={this.handleChange} />
        <label>Job</label>
        <input
          type="text"
          name="job"
          value={job}
          onChange={this.handleChange} />
        <input type="button" value="Submit" onClick={this.submitForm} />
      </form>
    );
  }
}

export default Form