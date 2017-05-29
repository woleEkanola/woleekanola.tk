import React, { Component } from 'react';
import Granim from 'granim'


class Canvas  extends Component {

shouldComponentUpdate(){
  return false;
}

componentDidMount(){
  var granimInstance = new Granim({
      element: '#canvas-radial',
      name: 'radial-gradient',
      direction: 'radial',
      opacity: [1, 1],
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  ['#674172', '#BF55EC'],
                  ['#446CB3', '#22313F'],
                  ['#F89406', '#96281B']
              ]
          }
      }
  });

}

  render() {
    return (
      <canvas id="canvas-radial"></canvas>

    );
  }
}

export default Canvas;
