import React, { Component } from 'react';
import '../css/menu.css'
import { Link } from 'react-router-dom'

import SocialIcons from './socials.js'

class Menu extends Component {
  render() {
    return (
      <div className= {this.props.classs}>
      <h5 onClick= {this.props.menuToggle}> X </h5>

      <div className= 'menu'>
    <Link to="/" >   <p className= 'menuItem' onClick= {this.props.menuToggle}>    Home  </p> </Link>
      <Link to="/about-me" ><p className= 'menuItem' onClick= {this.props.menuToggle}>  About Me  </p></Link>
      <Link to="/blog" ><p className= 'menuItem' onClick= {this.props.menuToggle}>  My thoughts </p></Link>
      <Link to="/portfolio" ><p className= 'menuItem' onClick= {this.props.menuToggle}>   My Works </p></Link>
      <Link to="/training" ><p className= 'menuItem' onClick= {this.props.menuToggle}>  Trainings </p></Link>
      <Link to="/contact-me" ><p className= 'menuItem' onClick= {this.props.menuToggle}>   Contact </p></Link>

      </div>

      <SocialIcons />
</div>
    );
  }
}

export default Menu;
