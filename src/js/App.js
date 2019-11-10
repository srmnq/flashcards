import Card from './Card'
import Form from './Form'
import { getCards, postCard, deleteCard } from './services'

export default class App {
  constructor() {
    this.cardContainer = document.querySelector('.card-container')
    getCards()
      .then(cards => {
        this.cards = cards
        this.renderCards()
      })
      .catch(err => console.log('--->', err))

    this.form = new Form({ onSubmit: card => this.handleSubmit(card) })
  }

  handleSubmit(card) {
    postCard(card).then(createdCard => {
      this.cards = [...this.cards, createdCard]
      this.renderCards()
    })
  }

  renderCards() {
    this.cardContainer.innerHTML = ''
    this.cards.forEach(
      card =>
        new Card({
          card,
          target: this.cardContainer,
          onDelete: card => this.handleDelete(card),
          onEdit: card => this.handleEdit(card)
        })
    )
  }

  handleDelete(card) {
    deleteCard(card.id).then(deletedCard => {
      this.cards = this.cards.filter(card => card.id !== deletedCard.id)
      this.renderCards()
    })
  }

  handleEdit(card) {
    this.form.editCard(card)
  }
}
