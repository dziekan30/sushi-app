import React, { Component } from 'react'
import axios from 'axios'


export default class CatFacts extends Component {
  state = {
    facts: [],
  }

  componentDidMount() {
    axios.get(`https://cat-fact.herokuapp.com/facts`)
      .then(response => {
        // console.log(response)
        const facts = response.data;
        this.setState({ facts });
      })
    // console.log(this.state.facts)
  }

  render() {
    return (
      <div>
        {this.state.facts.map((fact, index) =>
          <ul>
            <li key={index} > {fact} </li>
          </ul>
        )}
        Facts
      </div>
    )
  }
}

