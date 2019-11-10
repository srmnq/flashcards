export default class Card {
  constructor(card, target, onDelete) {
    this.onDelete = onDelete
    this.target = target
    this.createCardElement(card)
  }

  createCardElement(card) {
    const el = document.createElement('section')
    el.classList.add('card')
    this.createHTML(el, card)

    this.addToggleLogic(el)

    this.deleteCard(el, card)
  }

  addToggleLogic(el) {
    const toggleButton = el.querySelector('.show-button')
    const content = el.querySelector('.content')
    toggleButton.addEventListener('click', () => {
      content.toggleAttribute('hidden')
      toggleButton.textContent === 'Show'
        ? (toggleButton.textContent = 'Hide')
        : (toggleButton.textContent = 'Show')
    })
    this.target.appendChild(el)
  }

  createHTML(el, card) {
    el.innerHTML = `<h2>${card.title}</h2> <button class="delete" type="button">X</button>
      <div class='content' hidden >
      
          <p>${card.question}</p>
          <p class='answer'>${card.answer}</p>
      </div>
    <button class='show-button'>Show</button>`
  }

  deleteCard(el, card) {
    const deleteButton = el.querySelector('.delete')
    deleteButton.addEventListener('click', () => {
      el.remove()
      this.onDelete(card)
    })
  }
}
