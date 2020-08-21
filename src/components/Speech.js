import React from 'react';
import Speech from 'react-speech';
import { Container } from 'react-bootstrap';

export default props =>
  <Container>
    <Speech
      onClick={event => console.log(event)}
      text="Welcome!.  To level 7, of 'Jumanji!'. By the way Jess, that voice is creepy."
    >
      Click
  </Speech>
  </Container>

