import React, { Component } from 'react'
//import logo from './logo.svg'; // logo.svg in srs dir

class App extends Component {
  state = {
    data: [],
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    let crucialNetErr = true
    console.log('===============> fetch begin')
    fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => {
      crucialNetErr = false
      console.log('===============> fetch response got response.ok as ' + response.ok)
      if(response.ok) {
        //console.log(response.text())
        return response.json()
      }
      /*
      response.status 404 response.statusText: "Not Found"
      */
      throw new Error(`${response.status} - ${response.statusText}`) // will be catched by final .catch().
      //throw new Error('Network response was not ok.') // will be catche by final .catch().
    })
    .then(dataJson => {
      console.log('===============> setState fetched JSON in dataJson object')
      console.log(dataJson)
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
    })
    .catch(err => { // catch network error and artificially thrown Error in very first then().
      // Do something for crucial or non-crucial error e.g. 404 here
      const errorMessage = document.createElement('p')
      if (crucialNetErr) {
        console.log('=======================> fetch Crucial error: ' + err.message)
        errorMessage.textContent = 'Network response NOT got: ' + err.message
      }
      else {
        console.log('=======================> fetch Non-crucial error: ' + err.message)
        errorMessage.textContent = 'Network response: ' + err.message
      }
      //app.appendChild(errorMessage)
    })
    /* NB! The fetch() promise will reject with a TypeError only when a crucial network error is encountered or 
      CORS is misconfigured on the server side, although this usually means permission issues or similar.
    */
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
        {/*<img src={logo} alt="React Logo" className = 'logo' ></img>*/}
        <img src="logo.png" alt="React Logo" className = 'logo' ></img> {/* logo.png in public dir */}
        <div className = 'container'>{result}</div>
      </div>
    ) // end of final render return.
  } // end of final render.
} // end of class component.

export default App