// Custom class component - Table using simple sub-components.
import React, { Component } from 'react'

/*
// Samples SimpleComponent vs. ClassComponent
const SimpleComponent = () => {
  return <div>Example</div>
}

class ClassComponent extends Component {
  render() {
    return <div>Example</div>
  }
}

// Note that if the return is contained the one line only, it does not need parentheses.
// A class component must include render(), and the return statement can only return ONE parent element:
*/

// Simple components:
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  )
}

const TableBody = () => {
  return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>MacMillian</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
  )
}

// Class component that uses simple (sub-)components.
// A class component must include render(), and the return can only return ONE parent element:
class Table extends Component {
  render() {
    return (
      <table>
        <TableHeader />
        <TableBody />
      </table>
    )
  }
}
/* Initial:
class Table extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Charlie</td>
            <td>Janitor</td>
          </tr>
          <tr>
            <td>Mac</td>
            <td>Bouncer</td>
          </tr>
          <tr>
            <td>Dee</td>
            <td>Aspiring actress</td>
          </tr>
          <tr>
            <td>Dennis</td>
            <td>Bartender</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
*/

export default Table