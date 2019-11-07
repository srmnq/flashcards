fetch('http://localhost:3333/cards')
  .then(res => res.json())
  .then(cards => cards.forEach(createCardElement))
  .catch(err => console.log('--->', err))

function createCardElement(card) {
  const el = document.createElement('section')
  el.classList.add('card')
  createHTML(el, card)

  document.body.appendChild(el)

  addToggleLogic(el)
}

function addToggleLogic(el) {
  const toggleButton = el.querySelector('.show-button')
  const content = el.querySelector('.content')
  toggleButton.addEventListener('click', () => {
    content.toggleAttribute('hidden')
    toggleButton.textContent === 'Show'
      ? (toggleButton.textContent = 'Hide')
      : (toggleButton.textContent = 'Show')
  })
}

function createHTML(el, card) {
  el.innerHTML = `<h2>${card.title}</h2> 
    <div class='content' hidden >
        <p>${card.question}</p>
        <p class='answer'>${card.answer}</p>
    </div>
  <button class='show-button'>Show</button>`
}
