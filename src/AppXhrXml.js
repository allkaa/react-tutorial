import React, { Component } from 'react'

class App extends Component {
  state = {
    data: '',
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    let txtErr 
    //let objThis = this
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://10.8.194.3:42001/?testDebian', true);
    // If specified, responseType must be empty string or "document"
    xhr.responseType = 'document';
    // Force the response to be parsed as XML
    xhr.overrideMimeType('text/xml');
    
    xhr.onload = () => {
      console.log(xhr.getAllResponseHeaders());
      let docXml
      if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        //console.log(xhr.response);
        docXml = xhr.responseXML
        //console.log(docXml);
        let xmlS = new XMLSerializer();
        let xmlString = xmlS.serializeToString(docXml);
        console.log(xmlString)
        let nodeValue = docXml.getElementsByTagName("result")[0].childNodes[0].nodeValue; // get <result> tag text value.
        let nodeValue2 = docXml.getElementsByTagName("comment")[0].childNodes[0].nodeValue; // get <comment> tag text value.
        this.setState({
          //data: xmlString,
          data: `result = ${nodeValue}, comment = ${nodeValue2}`
        })
      }
      else {
        txtErr = `Request onload error - status ${xhr.status}`
        console.log(txtErr)
        this.setState({ data: txtErr,})
        }
    }
    
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
    
    xhr.send();
    
  } // end of componentDidMount.
  
  render() {
    const { data } = this.state
    return <p>{data}</p>

    //const result = data.map((entry, index) => {
    //  return <li key={index}>{entry}</li>
    //})
    //return <ul>{result}</ul>
  }
}

export default App