import React, { Component } from 'react'
import './header.css'
import MyNavBar from '../MyNavBar/myNavBar'
import Logo from '../../img/logo.png'

export default class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="container">
          <MyNavBar logo={
            <img src={Logo} alt="Petshop - Logo" width="140" />
          } />
        </div>
      </header>
    )
  }
}