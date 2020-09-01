import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import Say from './Say'

export default class CatFacts extends Component {
  state = {
    fact: ""
  }

  componentDidMount() {
    axios.get(`https://catfact.ninja/fact`)
      .then(response => {
        const fact = response.data.fact;
        this.setState({ fact });
      })
  }

  render() {
    function refreshPage() {
      window.location.reload(false);
    }
    return (
      <Container>
        <div >
          <div>
            <h1 className="cat-header">Cat Fact</h1>
            <div>
              <h4>{this.state.fact}</h4>
            </div>
            <div className=" next-button">
              <Say fact={this.state.fact} />
            </div>
            <div className=" next-button">
              <button className="btn btn-secondary" onClick={refreshPage}>Click to see next Fact!</button>
            </div>
          </div>
        </div>
      </Container>

    )
  }
}