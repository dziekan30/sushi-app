import React, { Component } from 'react'
import axios from 'axios'

export default class Home extends Component {
  state = {
    cats: [],
  }

  componentDidMount() {
    axios.get(`https://api.thecatapi.com/v1/images/search`)
      .then(response => {
        const cats = response.data;
        this.setState({ cats });
      })
    // console.log(this.state.cats)
  }
  render() {
    return (
      <div>
        <div>
          {this.state.cats.map((cat, index,) =>
            <ul key={index}>
              <li >Cat ID: {cat.id} </li>
              <li >URL: {cat.url} </li>
              <li >Height: {cat.height} </li>
              <li >Width: {cat.width} </li>
            </ul>
          )}
        </div>
      </div>
    )
  }
}

