import React, { Component } from 'react';

import './App.css';
import Home from './pages/home.js'
import About from './pages/about.js'
import Portfolio from './pages/portfolio.js'
import Contact from './pages/contact.js'

class Wrapper extends Component {
  constructor(){
    super()
this.state={
classs: 'hide'
}
  }

menuToggle(){
    console.log('working')
    if(this.state.classs==='hide'){
  this.setState({classs: 'bgOverlay'})
    }else{
        this.setState({classs: 'hide'})
    }

}
  render() {
    return (
      <div>
<Home classs= {this.state.classs.bind(this)}  menuToggle= {this.menuToggle.bind(this)}/>
<About />
<Portfolio />
<Contact />
</div>
    );
  }
}

export default Wrapper;
