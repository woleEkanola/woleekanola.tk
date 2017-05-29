import React, { Component } from 'react';
import Menu from '../assets/components/menu.js'


class Contact extends Component {
  render() {
    return (
      <div>
       <img  src={require('../assets/img/menu.png')} className="scrll-animation" alt= 'menu' onClick= {this.props.menuToggle} />
      <p> Contact </p>
      <Menu classs= {this.props.classs}  menuToggle= {this.props.menuToggle.bind(this)}/>
</div>


    );
  }
}

export default Contact;
