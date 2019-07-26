// NB! Capitalize custom components name to differentiate them from regular HTML elements).
import React, { Component } from 'react'

// Custom Controlled Component:
class NameForm extends Component {
  constructor(props) {
    console.log('========> NameForm constructor <==========')
    super(props);
    this.state = {
      name:
        'Alex Raven',
      essay:
        'Please write an essay about your favorite DOM element.'
    }; // very initial value.

    console.log(this.state.name);
    console.log(this.state.essay);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEssay = this.handleChangeEssay.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> NameForm componentDidMount <==========')
    console.log(this.state.name);
    this.setState({name: this.state.name.toUpperCase()})
    console.log(this.state.name);
    console.log(this.state.essay);
  }

  handleChangeName(event) {
    console.log('========> NameForm handleChangeName event <==========')
    //console.log(event)
    console.log(event.target.value);
    this.setState({name: event.target.value.toUpperCase()});
    console.log(this.state.name);
  }

  handleChangeEssay(event) {
    console.log('========> NameForm handleChangeEsssay event <==========')
    console.log(event.target.value);
    this.setState({essay: event.target.value});
    console.log(this.state.essay);
  }

  handleSubmit(event) {
    console.log('========> NameForm handleSubmit <==========')
    console.log(event.target);
    alert('Name: "' + this.state.name + '" and an essay: "' + this.state.essay + '" were submitted.');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>

        {/*
        <label>
          Name:
          <input type="text" id="name" name="user_name"  value={this.state.value} onChange={this.handleChange} />
        </label>
        <label>
          Essay:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
        <input type="submit" value="Submit" />
        */}
        <div>
          <label htmlFor="name">Name: <abbr title="required">*</abbr> </label>
          <input type="text" id="name" name="user_name"  value={this.state.name} onChange={this.handleChangeName}></input> {/*  value="default value" */}
        </div>

        <div>
          <label htmlFor="msg">Essay: <abbr title="required">*</abbr> </label>
          <textarea id="msg" name="user_essay" value={this.state.essay} onChange={this.handleChangeEssay} ></textarea> {/* for uncontrolled state use  defaultValue="Default textarea" */}
        </div>


        <div className="button">
          <button type="submit">Send your message</button>
        </div>

      </form>
    );
  }
}

export default NameForm