import React, { Component } from 'react'

class App extends Component {
  state = {
    data: '',
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    const url =
      'http://10.8.194.3:42001/?testDebian'

    fetch(url)
      .then(result => {
        // result is fetch(url) Response object
        console.log(result)
        return result.text() // return result.json()
      })
      .then(result => {
        // result is JSON array.
        console.log(result)
        this.setState({
          data: result,
        })
      })
  }

    /*
    render () {
    const result = data.map((entry, index) => {
      return <li key={index}>{entry}</li>
    })

    return <ul>{result}</ul>
    }
    */
   
   render() {
    const { data } = this.state
    return <div>
      <h1>Text data received from server:</h1>
      <p>{data}</p>
    </div>
  }
}

export default App