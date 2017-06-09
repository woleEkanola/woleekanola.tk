import React, { Component } from 'react';
import '../css/social.css'
import { Link } from 'react-router-dom'


class HeaderText extends Component {

  componentDidMount(){
  var self = this
  var x= 1
  setInterval(function(){
    if(x > 6){
      x= 0
    }else{

      x = x + 1
    }
    self.props.usetText(x)
    console.log(x)
  }, 2800)


  }

  render() {
    return (
      <h1 >
      I am a <span className='bggrText, changText'>{this.props.useText} </span></h1>

    );
  }
}

export default HeaderText;
