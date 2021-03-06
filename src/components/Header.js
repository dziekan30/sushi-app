import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Header() {

  return (
    <Jumbotron fluid className="header">
      <Container>
        <div className="row">
          <div className="col-6 column-left">
            <img className="logo" src="./sushi.png" alt="" />
          </div>
          <div className="col-6 column-right" >
            <h3 style={{ fontWeight: "bold" }}>About Sushi</h3>
            <p>We built this app to try out some REST API features as well as a React Speech
            text-to-audio feature, including buttons for Play, Stop, Pause, and Resume.
            The app displays a Cat Fact from this <a href="https://catfact.ninja/fact">Cat Facts API</a> as well as an image from
            this <a href="https://api.thecatapi.com/v1/images/search">Cat Pictures API.</a> Enjoy!
             </p>
          </div>

        </div>
      </Container>
    </Jumbotron>
  )

}
