import React, { Component } from 'react';
import '../assets/css/added.css'
import Canvas from '../assets/components/canvas.js'
import Type from '../assets/components/type.js'
import SvgLogo from '../assets/components/svglogo.js'
import Menu from '../assets/components/menu.js'


class Home extends Component {

  render() {

    return (
      <div className="container-full">

           <div className="overlay" >

             <center>
    <h3> Hi, I am</h3><br />

    <br />

    					 <img  src={require('../assets/img/menu.png')} className="scrll-animation" alt= 'menu' onClick= {this.props.menuToggle} />
               <SvgLogo />
               <Type />
                 </center>
                 <Menu classs= {this.props.classs}  menuToggle= {this.props.menuToggle.bind(this)}/>
           </div>

          <Canvas />
</div>
    );
  }
}

export default Home;
