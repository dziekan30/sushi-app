import React, { Component } from 'react'
import axios from 'axios'


export default class CatFacts extends Component {
  state = {
    facts: {}
  }

  componentDidMount() {
    axios.get(`https://catfact.ninja/fact`)
      // axios.get(`https://cat-fact.herokuapp.com/facts`)
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
        <h1>Cat Fact</h1>
        <div>
          {/* {console.log(this.state.facts)} */}
          {Object.keys(this.state.facts).map((fact, index) =>
            <ul key={index}>
              <li>{fact.fact}</li>
              <li>{fact.length}</li>
              {/* <li>{console.log(fact.fact)}</li> */}
            </ul>



          )}
        </div>
      </div>

    )
  }
}
