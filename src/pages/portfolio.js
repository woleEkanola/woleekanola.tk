import React, { Component } from 'react';
import Menu from '../assets/components/menu.js'
import SocialIcons from '../assets/components/socials.js'
import '../assets/css/portfolio.css'


class Portfolio extends Component {
constructor(){
  super()
  this.state= {
    search: ''
  }
}

componentDidMount(){
  if(this.props.portfolio){
    this.props.getTags()
  }else{
    console.log('load Tags')
  }

}


  render() {
    let select;
    let allPortfolio;
var img= Portfolio.img
var self= this


    if(this.props.portfolio){
      allPortfolio= self.props.portfolio.map(Portfolio =>{

        var x =  Portfolio.postTags.map(Tag =>{
          if(Tag){
            return(<p key= {Tag}> {Tag} </p>)
          }

              })

        return(
          <div key= {Portfolio.id}>
        <img  src= {Portfolio.postImage}  />

          <h1>{Portfolio.titleText}</h1>

{x}
            </div>
        )

      });

    }
    var tags;
var tagTitle;

    if(this.props.tags){
      tagTitle=  <h3> Select a tag to view by category</h3>
      tags = this.props.tags.map(Tag => {
        return(
          <p onClick= {this.props.tagClassToggle} key= {Tag} > {Tag} </p>
        )
      })
    }else{
      tagTitle= <h3 onClick= {this.props.getTags} className= 'clickIt'> CLick here to view by category</h3>
    }




    return (

      <div>
      <img  src={require('../assets/img/menu2.png')} className="scrll-animation" alt= 'menu' onClick= {this.props.menuToggle} />
      <Menu classs= {this.props.classs}  menuToggle= {this.props.menuToggle.bind(this)}/>


      <div className= 'banner'>


      <h1> My Portfolio </h1>
      <p> Over the years I have handled several projects for the different clients, <br />
      below is a collection of some of my recent projects. </p>
</div>
<div className= 'bannerNext'>
{ tagTitle}
<div className= 'tagCase'>
{tags}
</div>
      </div>

<div className= 'contayner'>
<div className= 'portfolioContent'>
{allPortfolio}
</div>
</div>


<SocialIcons />




</div>
    );
  }
}

export default Portfolio;
