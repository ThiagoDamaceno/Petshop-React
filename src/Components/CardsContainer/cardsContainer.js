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

  async getItems() {
    const { data } = await axios.get('https://server-node-example.herokuapp.com/produtos')
    
    this.refreshItemsCards(data)
  }

  refreshItemsCards(data) {
    this.setState({
      cardsProps: data
    })
  }

  createCards() {
    let cards = []

    for (let i = 0; i < this.state.cardsProps.length; i++) {
      cards.push(
        <Card key={this.state.cardsProps[i]._id} properties={this.state.cardsProps[i]} />
      )
    }

  return <div className="row">{cards}</div>
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