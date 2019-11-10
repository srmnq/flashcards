export default class Form {
  constructor({ onSubmit }) {
    const templateEl = document.querySelector('#form-template')
    const template = templateEl.innerHTML
    document.body.insertAdjacentHTML('afterbegin', template)
    this.el = document.querySelector('.form')

    this.el.addEventListener('submit', event => {
      event.preventDefault()
      const newCard = {
        title: this.el.title.value,
        question: this.el.question.value,
        answer: this.el.answer.value
      }
      this.el.title.value = ''
      this.el.question.value = ''
      this.el.answer.value = ''

      onSubmit(newCard)
    })
  }
  editCard(card) {
    this.el.title.value = card.title
    this.el.question.value = card.question
    this.el.answer.value = card.answer
  }
}
