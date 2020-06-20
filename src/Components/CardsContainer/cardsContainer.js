import React from 'react'
import Card from '../Card/card'

//Ajax
function getItems() {
  return (
    [
      'Ração',
      'Coleira',
      'Vacina',
      'Brinquedo',
      'Ração',
      'Coleira',
      'Vacina',
      'Brinquedo',
      'Coleira',
      'Vacina',
      'Brinquedo',
      'Ração'
    ]
  )
}

export default class CardsContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      dataCards: getItems()
    }

    this.refreshItemsCards = this.refreshItemsCards.bind(this)
  }

  refreshItemsCards() {
    this.setState({
      dataCards: getItems()
    })
  }

  createCards() {
    let countCardPerRow = 4

    if (this.state.dataCards.length < countCardPerRow)
      countCardPerRow = this.state.dataCards.length

    let rowsCards = []

    let count = 0
    for (let i = 0; i < this.state.dataCards.length / countCardPerRow; i++) {
      let cards = []
      for (let j = 0; j < countCardPerRow; j++) {
        if (this.state.dataCards[count] !== undefined) {
          cards.push(
            <Card key={count} titulo={this.state.dataCards[count]} />
          )
        }

        count++
      }
      
      rowsCards.push(
        <div key={i} className="row mb-3">
          {cards}
        </div>
      )
    }

    return rowsCards
  }

  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
        <div className="w-100">
          {this.createCards()}
        </div>
        <button className="btn btn-outline-primary mt-5" onClick={this.refreshItemsCards}>
          Refresh Cards
        </button>
      </div>
    )
  }
}