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
        '',
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
    console.log('========> NameFormFile handleSubmit <==========')
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
    event.preventDefault(); // prevent standard form submit to take control over.
    // Use created ref to the DOM node to access file(s) in a submit handler:
    alert(
      `Selected file to upload - ${
        this.fileInput.current.files[0].name
      }`
    );
    // Access the form element...
    let form = document.getElementById("myForm");
    // Bind the FormData object and the form element
    let FD = new FormData(form);

    let txtErr 
    //let objThis = this
    const xhr = new XMLHttpRequest();

    //xhr.open('GET', 'http://10.8.194.3:42001/?testDebian', true); // true is open async.
    //xhr.open('POST', 'http://10.8.194.3:42001/?testDebian', true);
    xhr.open('POST', 'http://unl.test:8081/fileupload', true);
    // If specified, responseType must be empty string, "text" or "document"
    //xhr.responseType = 'document';
    xhr.responseType = 'text';
    // Force the response to be parsed as XML
    //xhr.overrideMimeType('text/xml');
    //xhr.overrideMimeType('text/html');
    xhr.overrideMimeType('text/plain');

    // GET or PUT state case using onload event.
    xhr.onload = () => {
      console.log('========> FormFile event xhr.onload xhr.AllResponseHeaders<==========')
      console.log(xhr.getAllResponseHeaders());
      let docXml
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //console.log(xhr.response);
        /*
        docXml = xhr.responseXML
        //console.log(docXml);
        let xmlS = new XMLSerializer();
        let xmlString = xmlS.serializeToString(docXml);
        console.log('========> FormData event xhr.onload subevent xmlSting <==========')
        console.log(xmlString)
        let nodeValue = docXml.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
        let nodeValue2 = docXml.getElementsByTagName("comment")[0].childNodes[0].nodeValue; // get <comment> tag text value.
        */
        docXml = xhr.responseText;
        this.setState({
          //data: xmlString,
          essay: `Server reply: ${docXml}\nFile ${this.fileInput.current.files[0].name} uploaded.`
        })
        console.log('========> FormFile event xhr.onload xhr.responseText<==========')
        console.log(docXml);
      }
      else {
        txtErr = `Request onload error - status ${xhr.status}, readyState ${xhr.readyState}`
        console.log(txtErr)
        this.setState({ data: txtErr,})
        }
    }
    //

    xhr.onerror = () => {
      txtErr = `Request failed -> onerror event occured.`
      console.log(txtErr)
      this.setState({ data: txtErr,})
    }
    
    xhr.ontimeout = () => {
      txtErr = `Request failed -> ontimeout event occured`
      console.log(txtErr)
      this.setState({ data: txtErr,})
    }

    console.log('========> FormDataFile submit event to send <==========')
    console.log(FD);
    // Send our FormData object; HTTP headers are set automatically!!!
    //xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); <---- do not use with FD.
    xhr.send(FD);

  } // end of handleSubmit(event)

  // onSubmit={this.handleSubmit} action="http://unl.test:8081/fileupload" method="post" enctype="multipart/form-data"
  // formMethod="post" formAction="http://unl.test:8081/fileupload" enctype="multipart/form-data"
  render() {
    return (
      <form id="myForm" onSubmit={this.handleSubmit}  action="http://unl.test:8081/fileupload" method="post" enctype="multipart/form-data">

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
        {/* event target type will be textarea */}
        <div>
          <label htmlFor="msg">Received from server:</label>
          <textarea id="msg" name="user_essay" value={this.state.essay} ></textarea> {/* for uncontrolled state use  defaultValue="Default textarea" */}
        </div>
        
        <br/>
        <div className="button">
          {/* event target type will be submit */}
          <button type="submit">
            Upload file
          </button>
        </div>

      </form>
    );
  }
}

export default NameForm