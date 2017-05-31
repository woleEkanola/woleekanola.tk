import React, { Component } from 'react';
import Menu from '../assets/components/menu.js'
import SocialIcons from '../assets/components/socials.js'
import '../assets/css/portfolio.css'
import Tabs from 'react-simpletabs'

class Portfolio extends Component {
  render() {
    return (

      <div>
      <img  src={require('../assets/img/menu2.png')} className="scrll-animation" alt= 'menu' onClick= {this.props.menuToggle} />
      <Menu classs= {this.props.classs}  menuToggle= {this.props.menuToggle.bind(this)}/>


      <div className= 'banner'>
      <img  src={require('../assets/img/coded.jpg')} className="pgBanner" alt= 'Page Banner' />
<div>
      <h1> My Portfolio </h1>
</div>
      </div>

<div className= 'container-fluid'>

<h3> Over the years I have handled several projects for the different clients,
below is a collection of some of my recent projects. </h3>


<Tabs id= 'tab'>
<Tabs.Panel title='All'>
<div className= 'tabContent'>
  <div>
  <h1>Title</h1>
<img  src={require('../assets/img/portfolio2.jpg')} className="" alt= 'menu' onClick= {this.props.menuToggle} />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
  <div>
  <h1>Title</h1>
  <img  src={require('../assets/img/portfolio2.jpg')} className="" alt= 'menu' onClick= {this.props.menuToggle} />
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
  <div>
  <h1>Title</h1>
<img  src={require('../assets/img/portfolio2.jpg')} className="" alt= 'menu' onClick= {this.props.menuToggle} />
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>

</div>
</Tabs.Panel>
<Tabs.Panel title='Website'>
<div className= 'tabContent'> Websites</div>
</Tabs.Panel>
<Tabs.Panel title='Web Apps'>
<div className= 'tabContent'> Web Apps</div>
</Tabs.Panel>
<Tabs.Panel title='Graphic Designs '>
<div className= 'tabContent'> Graphic Designs </div>
</Tabs.Panel>
<Tabs.Panel title='Prints '>
<div className= 'tabContent'> Prints </div>
</Tabs.Panel>
</Tabs>
            </div>

<SocialIcons />


</div>
    );
  }
}

export default Portfolio;
