import React from 'react'
import './card.css'

export default class Card extends React.Component {
  render() {
    let elementDesconto
    let valor

    if (this.props.properties.desconto === '') {
      elementDesconto = ''
      valor = parseFloat(this.props.properties.valor)
    } else {
      let valorDesconto = this.props.properties.desconto
      valorDesconto = parseFloat(valorDesconto.split('%')[0])

      elementDesconto = <p>Desconto: <span className="text-success font-weight-bold">{this.props.properties.desconto}</span></p>

      valor = parseFloat(this.props.properties.valor - this.props.properties.valor * (valorDesconto / 100)).toFixed(2)
    }

    return (
      <div className="col-sm-12 col-lg-6 col-xl-3 d-flex justify-content-center p-0">
        <div className="card">
          <h3>{this.props.properties.nome}</h3>

          {elementDesconto}
          <p>R$ {valor}</p>

          <button className="btn btn-outline-primary w-100 mt-2">Comprar</button>
        </div>
      </div>
    )
  }
}