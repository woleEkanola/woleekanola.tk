import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './pages/home.js'
import About from './pages/about.js'
import Portfolio from './pages/portfolio.js'
import Contact from './pages/contact.js'
import Blog from './pages/blog.js'
import Training from './pages/trainings.js'
import uuidV1 from 'uuid'
import Request from 'superagent'


class App extends Component {

  constructor(){
    super()
this.state={
classs: 'hide',
num: 0,
text: ['Christian', 'Web Developer', 'Husband', 'Graphic Artist', 'Nigerian', 'Father',' Printer', 'Business Man'],
useText: 'Web Developer',
tagClass: ' ',

}
  }

componentWillMount(){
  var portfolioUrl= 'http://woleekanola.tk/wp/wp-json/wp/v2/portfolios'
  var blogUrl= 'http://woleekanola.tk/wp/wp-json/wp/v2/posts/?filter[posts_per_page]=12'
  Request.get(portfolioUrl).then((response) => {
   this.setState({   portfolios: response.body   })

 } )

 Request.get(blogUrl).then((response) => {
  this.setState({   posts: response.body   })

 } )


}
componentDidMount(){

}

getTags(){
  var self = this
  var tags = [];
  var tx = self.state.portfolios
  var getTags = tx.map(Portfolio => {
    Portfolio.postTags.map(Tag => {
      if(tags.indexOf(Tag) < 0){
        tags.push(Tag)
      }

    })


 //tags.push(Portfolio.postImage)
  })
  this.setState({tags: tags})
  console.log(tags)
}
menuToggle(){

    if(this.state.classs==='hide'){
  this.setState({classs: 'bgOverlay'})
    }else{
        this.setState({classs: 'hide'})
    }
}
resetTagClass(){
  console.log('ok')
  this.setState({tagClass: ' '})
}
tagClassToggle(e){
  this.resetTagClass()
  if(e.target.classList.contains('active')){
    this.setState({tagClass: ' '})
    e.target.className =  this.state.tagClass
  }else{
    this.setState({tagClass: 'active'})
    e.target.className =  this.state.tagClass

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
          tagClass= { this.state.tagClass}
          tagClassToggle= {this.tagClassToggle.bind(this)}
          tags= {this.state.tags}
          getTags= {this.getTags.bind(this)}
          portfolio= {this.state.portfolios}
          classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />
        <Route path='/contact-me'render={() => (
          <Contact classs= {this.state.classs}
          menuToggle= {this.menuToggle.bind(this)}/>
        )} />
        <Route path='/blog'render={() => (
          <Blog
          posts={this.state.posts}
          classs= {this.state.classs}
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
