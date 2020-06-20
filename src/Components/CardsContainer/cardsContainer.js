import React from 'react'
import axios from 'axios'
import Card from '../Card/card'

export default class CardsContainer extends React.Component {
   constructor(props) {
    super(props)

    this.state = {
      cardsProps: []
    }

    this.refreshItemsCards = this.refreshItemsCards.bind(this)
  }

  componentDidMount() {
    this.getItems()
  }

  getItems() {
    axios.get('https://server-node-example.herokuapp.com/produtos')
      .then(({ data }) => {
        this.refreshItemsCards(data)
      })
  }

  refreshItemsCards(data) {
    let newState = []

    data.forEach(element => newState.push({
      nome: element.nome,
      valor: element.valor,
      desconto: element.desconto,
      _id: element._id
    }))

    console.log(data)

    this.setState({
      cardsProps: newState
    })
  }

  createCards() {
    let countCardPerRow = 4

    if (this.state.cardsProps.length < countCardPerRow)
      countCardPerRow = this.state.cardsProps.length

    let rowsCards = []

    let count = 0
    for (let i = 0; i < this.state.cardsProps.length / countCardPerRow; i++) {
      let cards = []
      for (let j = 0; j < countCardPerRow; j++) {
        if (this.state.cardsProps[count].nome !== undefined) {
          cards.push(
            <Card key={this.state.cardsProps[count]._id} properties={this.state.cardsProps[count]} />
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
      <section className="container d-flex flex-column align-items-center">
        <h2 className="mx-auto mb-5">Produtos</h2>
        <div className="w-100">
          {this.createCards()}
        </div>
      </section>
    )
  }
}