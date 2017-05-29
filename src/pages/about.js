import React, { Component } from 'react';
import Menu from '../assets/components/menu.js'
import SocialIcons from '../assets/components/socials.js'



class About extends Component {
  constructor(){
    super()
    this.state ={
      num: 0,
      text: ['Christian', 'Web Developer', 'Husband', 'Graphic Artist', 'Nigerian', 'Father',' Printer', 'Business Man'],
      useText: ''
    }
    this.setState= this.setState.bind(this)
  }
changText(){
  var x= this.state.num
  var text = this.state.text

  var useText = text[x]
    return useText

  }
  textChanged(){
    var x= this.state.num
    var y = this.state.text.length - 2
    if(x <= y ){
      x = x+1
    }else{
      x= 0
    }
    this.setState({num: x})
  }
  componentDidMount(){



}
  render() {
    return (
      <div>
    <img  src={require('../assets/img/menu2.png')} className="scrll-animation" alt= 'menu' onClick= {this.props.menuToggle} />
    <Menu classs= {this.props.classs}  menuToggle= {this.props.menuToggle.bind(this)}/>

    <div id="wrap">
      <figure>
        <img src={require("../assets/img/bg2.jpg")} alt="boy" className="w3-image" width="100%" height="auto" />
        <img src={require("../assets/img/bg3.jpg")} alt="boy" className="w3-image" width="100%" height="auto" />
        <img src={require("../assets/img/bg2.jpg")} alt="boy" className="w3-image" width="100%" height="auto" />
        <img src={require("../assets/img/bg3.jpg")} alt="boy" className="w3-image" width="100%" height="auto" />
        <img src={require("../assets/img/bg2.jpg")} alt="boy" className="w3-image" width="100%" height="auto" />


      </figure>

    </div>

    <div id='about'  className='aboutMe'>
    	<h4> Who Am i ?</h4>
    			<h1 className='bggrText'>
    I am a {this.state.text[2]} </h1>
    <p>I am an ambassador of Christ kingdom in business, I live to show the way to eternity with the father and at the same time a super model of Gods intention of Heaven on earth for his children. I am the C.E.O of BrandMainger (a Graphic design, Branding and Digital Marketing firm) and Yourlovemessenger a gift delivery service provider in Nigeria.
    In every man lies greatness, everyone has a flavour, everyone has something to bless the world with, its my passion to bless the world with my gift, I have made a covenant with myself to die empty.</p>


    </div>




<SocialIcons />


</div>
    );
  }
}

export default About;
