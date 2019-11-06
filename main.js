console.log('it works')

fetch('http://localhost:3333/cards')
  .then(res => res.json())
  .then(cards => cards.forEach(createCard))
  .catch(err => console.log(err))

function createCard({ title, question, answer }) {
  const wrapper = document.createElement('div')
  const box = document.createElement('section')
  const link = document.createElement('a')

  link.textContent = 'show'
  link.style.display = 'block'
  box.classList.add('card')

  wrapper.appendChild(box)
  box.appendChild(link)
  document.body.appendChild(wrapper)
  const container = document.createElement('div')
  container.classList.add('hidden')
  container.classList.add('card')

  container.innerHTML = `<h1>${title}</h1> <h2>${question}</h2> <p>${answer}</p>`

  wrapper.appendChild(container)

  link.addEventListener('click', () => toggleHiddenClass(container, link))
}

function toggleHiddenClass(container, link) {
  container.classList.toggle('hidden')
  link.textContent === 'show'
    ? (link.textContent = 'hide')
    : (link.textContent = 'show')
}
