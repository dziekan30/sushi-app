import React, { Component } from 'react'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import CatFacts from './CatFacts'

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
  }
  render() {
    return (
      <Container>
        <div className="row">
          <div className="column-fact-left col-6 ">
            {this.state.cats.map((cat, index,) =>
              <div key={index}>
                <img className="cat-img" src={cat.url} alt="" />
              </div>
            )}
          </div>
          <div className="column-fact-right col-6">
            <CatFacts />
          </div>
        </div>
      </Container>
    )
  }
}

