import Card from './Card'
import Form from './Form'

export default class App {
  constructor() {
    fetch('http://localhost:3333/cards')
      .then(res => res.json())
      .then(cards => cards.forEach(card => new Card(card)))
      .catch(err => console.log('--->', err))

    new Form({ onSubmit: newCard => this.handleSubmitLogic(newCard) })
  }
  handleSubmitLogic(newCard) {
    postCard({ newCard }).then(new Card(newCard))
  }
}

function postCard(card) {
  return fetch('http://localhost:3333/cards', {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'content-type': 'application/json'
    }
  }).then(res => res.json())
}
