import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

export default function Header() {

  return (
    <Jumbotron fluid className="header">
      <Container>
        <img className="logo" src="./sushi-logo.png" alt="" />
      </Container>
    </Jumbotron>
  )

}
