import React, { Component } from 'react';
import '../css/social.css'
import { Link } from 'react-router-dom'


class SocialIcons extends Component {
  render() {
    return (
      <div className= 'socialContainer'>

<p> Where to find me</p>

      <Link to="/about-me" ><img src={require("../img/instagram.png")} alt="boy" className="w3-image" /></Link>
      <Link to="/" ><img src={require("../img/facebook.png")} alt="boy" className="w3-image"  /></Link>
      <Link to="/portfolio" ><img src={require("../img/twitter.png")} alt="boy" className="w3-image"  /></Link>
      <Link to="/" ><img src={require("../img/linkedin.png")} alt="boy" className="w3-image" /></Link>
      <Link to="/contact-me" ><img src={require("../img/youtube.png")} alt="boy" className="w3-image"  /></Link>


</div>
    );
  }
}

export default SocialIcons;
