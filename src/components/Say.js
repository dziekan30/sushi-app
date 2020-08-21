import React from 'react';
import { SayButton } from 'react-say';
import { Container } from 'react-bootstrap';

export default props =>
  <Container>
    <SayButton
      onClick={event => console.log(event)}
      pitch={80.1}
      rate={.7}
      speak="Welcome!.  To level seven of Jumanji!. By the way Jess, that voice is creepy. "
      volume={1.2}
    >
      Click Me!
    </SayButton>
  </Container>