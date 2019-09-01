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
        ['Coconut','Lime'],
      checkOption:
        ['option1'],
      radioOption:
        'option1'
    }; // very initial value.
    // Create a ref to the DOM node to access file(s) in a submit handler:
    this.fileInput = React.createRef();

    console.log(this.state.name);
    console.log(this.state.essay);
    console.log(this.state.fruit);

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
    console.log(this.state.checkOption);
    console.log(this.state.radioOption);
  }

  handleSubmit(event) {
    console.log('========> NameForm handleSubmit <==========')
    console.log('event: ' + event);
    console.log(event);
    console.log('event.target: ' + event.target);
    console.log(event.target);
    console.log('event.target.name: ' + event.target.name);
    console.log(event.target.name);
    console.log('event.target.type: ' + event.target.type)
    console.log(event.target.type)
    console.log('event.target.value: ' + event.target.value);
    console.log(event.target.value);
    console.log(this.state);
    //alert('Name: "' + this.state.name + '" and an essay: "' + this.state.essay + '" and fruit: "' + this.state.fruit + '" were submitted.');
    event.preventDefault();
    // Use created ref to the DOM node to access file(s) in a submit handler:
    alert(
      `Selected file to upload - ${
        this.fileInput.current.files[0].name
      }`
    );
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
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        */}
        <div>
          <label htmlFor="file_name">Upload file:: <abbr title="required">*</abbr> </label>
          <input type="file" id="file_name" name="filetoupload" ref={this.fileInput} />
        </div>
        
        <br/>
        <div className="button">
          {/* event target type will be submit */}
          <button type="submit" formMethod="post" formAction="http://unl.test:8081/fileupload" enctype="multipart/form-data">Upload file</button>
        </div>

      </form>
    );
  }
}

export default NameForm