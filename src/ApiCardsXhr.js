import React, { Component } from 'react'
import logo from './logo.svg';

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {

    let txtErr 
    //let objThis = this
    const xhr = new XMLHttpRequest();
    console.log('===============> Xhr begin')
    console.log('===============> xhr.readyState: ' + xhr.readyState)

    xhr.onreadystatechange = () => {
      console.log('===============> xhr.readyState: ' + xhr.readyState)
    }
    console.log('===============> xhr.open begin')
    xhr.open('GET', 'https://ghibliapi.herokuapp.com/films', true) // true is for asyn open mode, false for syn but depricated.
    console.log('===============> xhr.open done')
    console.log('===============> xhr.send() begin')
    xhr.send() // if syn open case, takes long time up to onreadystatechange = 4.
    console.log('===============> xhr.send() done')

    xhr.onload = () => {
      console.log('===============> xhr.onload event activated')
      console.log('===============> Begin of this.responseText <=================')
      //console.log(this.responseText)
      console.log('===============> End of this.responseText <=================')
      // Begin accessing JSON data here
      let dataJson = JSON.parse(this.response)
      console.log('=======================> xhr.onload event this.status: ' + this.status)
      if (this.status >= 200 && this.status < 400) {
        console.log('===============> Create setState JSON array from fetched JSON in dataJson object')
        //console.log(dataJson)
        let arrJson = []
        dataJson.forEach(movie => {
          let arrMovie = []
          arrMovie.push(movie.title)
          movie.description = movie.description.substring(0, 300) // Limit to 300 chars
          arrMovie.push(movie.description)
          arrJson.push(arrMovie)
        })
        this.setState({
          data: arrJson,
        })
      } // end of this.status.
      console.log('===============> xhr.onload event finished')
    } // end of xhr.onload.
    
    xhr.onerror = () => {
      txtErr = `Request failed -> xhr.onerror event occured.`
      console.log(txtErr)
      this.setState({ data: [`On Error`,txtErr],})
    }
    
    xhr.ontimeout = () => {
      txtErr = `Request failed -> xhr.ontimeout event occured`
      console.log(txtErr)
      this.setState({ data: [`On Timeout`,txtErr],})
    }
    
  } // end of componentDidMount().

  // A class component must include render(), and the return statement can only return ONE parent element:
  render() {
    console.log('===============> render fetched JSON array from data object')
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
        <img src={logo} alt="React Logo" className = 'logo' ></img>
        <div className = 'container'>{result}</div>
      </div>
    ) // end of final render return.
  } // end of final render.
} // end of class component.

export default App