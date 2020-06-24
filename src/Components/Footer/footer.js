import React from 'react'
import './footer.css'
import logo from '../../img/logo.png'
import ContactImages from '../ContactImages/contactImages'

export default class Foorter extends React.Component {

  render() {
    return (
      <footer className="">
        <div className="container footer px-3 px-md-0">
          <img src={logo} width="110"/>
          <p className="d-none d-md-block">Estudo em React - Grupo 2</p>
          
          <ContactImages />
        </div>
      </footer>
    )
  }
}