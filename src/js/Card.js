export default class Card {
  constructor(card) {
    this.createCardElement(card)
  }

  createCardElement(card) {
    const el = document.createElement('section')
    el.classList.add('card')
    this.createHTML(el, card)

    document.body.appendChild(el)

    this.addToggleLogic(el)
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
  }

  createHTML(el, card) {
    el.innerHTML = `<h2>${card.title}</h2> 
      <div class='content' hidden >
          <p>${card.question}</p>
          <p class='answer'>${card.answer}</p>
      </div>
    <button class='show-button'>Show</button>`
  }
}
