import React, { Component } from 'react';
import Menu from '../assets/components/menu.js'
import SocialIcons from '../assets/components/socials.js'
import '../assets/css/training.css'


class Training extends Component {

  render() {
    return (
      <div>
      <img  src={require('../assets/img/menu2.png')} className="scrll-animation" alt= 'menu' onClick= {this.props.menuToggle} />
      <Menu classs= {this.props.classs}  menuToggle= {this.props.menuToggle.bind(this)}/>
    <div id= 'contaner'>
<h1> UNDER CONSTRUCTION</h1>
    </div>

<SocialIcons />


</div>
    );
  }
}

export default Training;
