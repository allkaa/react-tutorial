import React, { Component } from 'react'

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    let txtErr 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://10.8.194.3:42000/?testDebian', true);
    // If specified, responseType must be empty string or "document"
    xhr.responseType = 'document';
    // Force the response to be parsed as XML
    xhr.overrideMimeType('text/xml');
    
    xhr.onload = function () {
      let docXml
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //console.log(xhr.response);
        docXml = xhr.responseXML
        //console.log(docXml);
        let xmlS = new XMLSerializer();
        let xmlString = xmlS.serializeToString(docXml);
        console.log(xmlString)
        this.setState({ data: xmlString})
      }
      else {
        txtErr = `Request onload error - status ${xhr.status}`
        console.log(txtErr)
        this.setState({ data: txtErr})
        }
    }
    
    xhr.onerror = () => {
      txtErr = `Request failed -> onerror event occured.`
      console.log(txtErr)
      this.setState({ data: txtErr})
  }
    
    xhr.ontimeout = () => {
      txtErr = `Request failed -> ontimeout event occured`
      console.log(txtErr)
      this.setState({ data: txtErr,})
    }
    
    xhr.send();
    
  } // end of componentDidMount.
  
  render() {
    const { data } = this.state

    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
  }
}

export default App