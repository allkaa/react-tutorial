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
        'Please write an essay about your favorite DOM element.',
      fruit:
        ['Coconut','Lime']
    }; // very initial value.

    console.log(this.state.name);
    console.log(this.state.essay);
    console.log(this.state.fruit);

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEssay = this.handleChangeEssay.bind(this);
    this.handleChangeFruit = this.handleChangeFruit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> NameForm componentDidMount <==========')
    console.log(this.state.name);
    this.setState({name: this.state.name.toUpperCase()})
    console.log(this.state.name);
    console.log(this.state.essay);
    console.log(this.state.fruit);
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

  // Multiple select - do not use Ctrl in React.
  handleChangeFruit(event) {
    console.log('========> NameForm handleChangeFruit event <==========')
    console.log(event.target.value);
    let arrFruits = this.state.fruit; // this.state.fruit
    let indFruits = this.state.fruit.indexOf(event.target.value);
    if (indFruits === -1) {
      arrFruits.push(event.target.value)
    }
    else {
      arrFruits.splice(indFruits,1)
    }
    this.setState({fruit: arrFruits});
    console.log(this.state.fruit);
  }

  handleSubmit(event) {
    console.log('========> NameForm handleSubmit <==========')
    console.log(event.target);
    alert('Name: "' + this.state.name + '" and an essay: "' + this.state.essay + '" and fruit: "' + this.state.fruit + '" were submitted.');
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
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
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

        <br/>
        <fieldset>
          <legend>Pick your favorite flavor:</legend>
          <select multiple={true} value={this.state.fruit} onChange={this.handleChangeFruit}>
            <option value="Grapefruit">Grapefruit</option>
            <option value="Lime">Lime</option>
            <option value="Coconut">Coconut</option>
            <option value="Mango">Mango</option>
          </select>
        </fieldset>

        <br/>
        <div className="button">
          <button type="submit">Send your message</button>
        </div>

      </form>
    );
  }
}

export default NameForm