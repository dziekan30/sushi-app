import React, { Component } from 'react';
import Speech from 'react-speech';
import { Container } from 'react-bootstrap';


export default class Say extends Component {
  constructor(props) {
    super(props);
    this.state = {
      play: false,
      stop: false,
      resume: false,
      pause: false
    };

  }

  render() {
    const style = {
      container: {
        width: '100%'
      },
      text: {
        width: '100%',
        display: ''
      },
      play: {
        hover: {
          backgroundColor: 'GhostWhite'
        },
        button: {
          width: '15%',
          height: '15%',
          cursor: 'pointer',
          pointerEvents: 'none',
          outline: 'none',
          backgroundColor: 'Gainsboro',
          border: 'solid 1px rgba(255,255,255,1)',
          borderRadius: 6
        }
      },
      stop: {
        hover: {
          backgroundColor: 'GhostWhite'
        },
        button: {
          width: '15%',
          height: '15%',
          cursor: 'pointer',
          pointerEvents: 'none',
          outline: 'none',
          backgroundColor: 'Gainsboro',
          border: 'solid 1px rgba(255,255,255,1)',
          borderRadius: 6
        }
      },
      pause: {
        hover: {
          backgroundColor: 'GhostWhite'
        },
        button: {
          width: '15%',
          height: '15%',
          cursor: 'pointer',
          pointerEvents: 'none',
          outline: 'none',
          backgroundColor: 'Gainsboro',
          border: 'solid 1px rgba(255,255,255,1)',
          borderRadius: 6
        }
      },
      resume: {
        hover: {
          backgroundColor: 'GhostWhite'
        },
        button: {
          width: '15%',
          height: '15%',
          cursor: 'pointer',
          pointerEvents: 'none',
          outline: 'none',
          backgroundColor: 'Gainsboro',
          border: 'solid 1px rgba(255,255,255,1)',
          borderRadius: 6
        }
      }
    };

    return (
      <Container className="play-buttons">
        <Speech
          stop={true}
          play={true}
          pause={true}
          resume={true}
          styles={style}
          text={this.props.fact}
        />
      </Container>
    )
  }

};
