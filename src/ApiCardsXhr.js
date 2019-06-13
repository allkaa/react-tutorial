import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    //console.log(this)
    //let thisApp = this // save original App this to use later on setState() - not needed.
    let txtErr 
    //let objThis = this
    console.log('===============> Xhr request begin')
    const xhr = new XMLHttpRequest();
    console.log('===============> initial xhr.readyState: ' + xhr.readyState)

    xhr.onreadystatechange = () => {
      console.log('===============> onreadystatechange event xhr.readyState: ' + xhr.readyState)
    }

    console.log('===============> xhr.open begin')
    xhr.open('GET', 'https://ghibliapi.herokuapp.co/films', true) // true is for asyn open mode, false for syn but depricated.
    console.log('===============> xhr.open done')
    // If specified, responseType must be empty string or "document"
    xhr.responseType = 'text';
    // Force the response to be parsed as json
    xhr.overrideMimeType('text/json');

    // onload use arrow function to have access to App this object.
    xhr.onload = () => {
      console.log('===============> xhr.onload event activated')
      console.log('=======================> xhr.onload event this.status: ' + xhr.status)
      if (xhr.status >= 200 && xhr.status < 400) {
        console.log('===============> Begin of xhr.responseText <=================')
        //console.log(xhr.responseText)
        console.log('===============> End of xhr.responseText <=================')
        // Begin accessing JSON data here
        let dataJson = JSON.parse(xhr.responseText)
        console.log('===============> JSON parsed xhr.responseText into dataJson <=================')
        console.log('===============> Create JSON array from fetched JSON in dataJson object')
        //console.log(dataJson)
        let arrJson = []
        dataJson.forEach(movie => {
          let arrMovie = []
          arrMovie.push(movie.title)
          movie.description = movie.description.substring(0, 300) // Limit to 300 chars
          arrMovie.push(movie.description)
          arrJson.push(arrMovie)
        })
        //console.log(arrJson)
        console.log('===============> Issue this.setState with JSON array created')
        this.setState({
          data: arrJson,
        })
      } // end of this.status.
      else {
        txtErr = `Request failed -> xhr.onload event error occured status:  ` + xhr.status
        console.log('==============> ' + txtErr )
        let arrJson = [[`NB! onload event Error`,txtErr]]
        this.setState({ data: arrJson,})
      }
      console.log('===============> xhr.onload event finished')
    } // end of xhr.onload.
    
    xhr.onerror = () => {
      console.log(xhr)
      txtErr = `Request failed -> xhr.onerror event occured - no connection established.`
      console.log('==============> ' + txtErr )
      let arrJson = [[`NB! onerror event occured`,txtErr]]
      this.setState({ data: arrJson,})
    }
    
    xhr.ontimeout = () => {
      txtErr = `Request failed -> xhr.ontimeout event occured - no connection established`
      console.log('==============> ' + txtErr )
      let arrJson = [[`NB! ontimeout event occured`,txtErr]]
      this.setState({ data: arrJson,})
    }

    console.log('===============> xhr.send() begin')
    xhr.send() // if syn open case, takes long time up to onreadystatechange = 4.
    console.log('===============> xhr.send() sent')
    
  } // end of componentDidMount().

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    console.log('===============> render fetched JSON array from this.state.data object')
    console.log(this.state)
    const { data } = this.state
    //console.log(data)
    // key must be used on every level of siblings childs.
    const result = data.map((movie, index) => {
      return (
        <div className = 'card' key = {index}>
          <h1 key = "0">{movie[0]}</h1>
          <p key = "1">{movie[1]}</p>
        </div>
      )
    }) // end of data map.

    //console.log(result)
    return (
      <div>
        {/*<img src={logo} alt="React Logo" className = 'logo' ></img>*/}
        <img src="logo.png" alt="React Logo" className = 'logo' ></img> {/* logo.png in public dir */}
        <div className = 'container'>{result}</div>
      </div>
    ) // end of final render return.
  } // end of final render.
} // end of class component.

export default App