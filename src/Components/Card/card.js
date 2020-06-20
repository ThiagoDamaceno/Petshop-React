import React from 'react'
import './card.css'

export default class Card extends React.Component {
  render() {
    return(
      <div className="col-sm-12 col-md-6 col-lg d-flex justify-content-center p-0">
        <div className="card">
          <h3>{this.props.titulo}</h3>
        </div>
      </div>
    )
  }
}