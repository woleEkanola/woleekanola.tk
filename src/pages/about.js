import React, { Component } from 'react';
import Menu from '../assets/components/menu.js'
import SocialIcons from '../assets/components/socials.js'
import HeaderText from '../assets/components/headertext.js'
import '../assets/css/about.css'
import { Timeline, Mention, Follow } from 'react-twitter-widgets'

class About extends Component {



  render() {
    return (
      <div>
    <img  src={require('../assets/img/menu2.png')} className="scrll-animation" alt= 'menu' onClick= {this.props.menuToggle} />
    <Menu classs= {this.props.classs}  menuToggle= {this.props.menuToggle.bind(this)}/>
<div className= 'bannerAbout'>

<HeaderText
usetText= {this.props.usetText}
useText={this.props.useText}
/>

</div>
<div className= 'aboutContent'>
<div className='pixFrame'>
<img  src={require('../assets/img/bg2.jpg')} className="aboutPix" alt= 'Wole EKanola'  />
</div>
<div className= 'textContent'>
<h4>
I am an unending discovery
</h4>
<p>I am an ambassador of Christ kingdom in business, I live to show the way to eternity with the father and at the same time a super model of Gods intention of Heaven on earth for his children. I am the C.E.O of BrandMainger (a Graphic design, Branding and Digital Marketing firm) and Yourlovemessenger a gift delivery service provider in Nigeria.
In every man lies greatness, everyone has a flavour, everyone has something to bless the world with, its my passion to bless the world with my gift, I have made a covenant with myself to die empty.</p>
<div className='gridd'>

<Mention username="woleekanola" options={{size: 'medium'}} /> <Follow username="woleekanola" options={{size: 'medium'}} />
</div>
</div>
</div>









<SocialIcons />


</div>
    );
  }
}

export default About;
