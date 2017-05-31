import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home.js'
import About from './pages/about.js'
import Portfolio from './pages/portfolio.js'
import Contact from './pages/contact.js'
import Blog from './pages/blog.js'
import Training from './pages/trainings.js'


class App extends Component {

  constructor(){
    super()
this.state={
classs: 'hide',
num: 0,
text: ['Christian', 'Web Developer', 'Husband', 'Graphic Artist', 'Nigerian', 'Father',' Printer', 'Business Man'],
useText: 'Web Developer'
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


usetText(x){
  var text= this.state.text[x]
  this.setState({useText: text})
  console.log('useText')
}

  render() {
    return (
      <div>

      <Switch>
        <Route exact path='/' render={() => (
          <Home
          classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />

        <Route path='/about-me' render={() => (
          <About
          useText={ this.state.useText}
          usetText= {this.usetText.bind(this)}
          classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />
        <Route path='/portfolio' render={() => (
          <Portfolio
          classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />
        <Route path='/contact-me'render={() => (
          <Contact classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />
        <Route path='/blog'render={() => (
          <Blog classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />
        <Route path='/training'render={() => (
          <Training classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />
      </Switch>
</div>
    );
  }
}

export default App;
