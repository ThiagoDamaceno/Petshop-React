import React from 'react'
import './contactImages.css'

import facebookLogo from '../img/facebook.png'
import instagramLogo from '../img/instagram.png'
import twitterLogo from '../img/twitter.png'
import youtubeLogo from '../img/youtube.png'

export default class ContactImages extends React.Component {

  render() {
    return(
      <div className="contact-logos-container">
        <img src={facebookLogo} width="51"/>
        <img src={instagramLogo} width="34"/>
        <img src={twitterLogo} width="38"/>
        <img src={youtubeLogo} width="50"/>
      </div>
    )
  }
}