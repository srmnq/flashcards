console.log('it works')

fetch('http://localhost:3333/cards')
  .then(res => res.json())
  .then(addLink)
  .catch(err => console.log(err))

function addLink(cards) {
  cards.forEach(card => {
    const wrapper = document.createElement('div')
    const box = document.createElement('section')
    const link = document.createElement('a')
    link.href = '#'
    link.textContent = 'show'
    link.style.display = 'block'
    box.classList.add('card')

    wrapper.appendChild(box)
    box.appendChild(link)
    document.body.appendChild(wrapper)
    const container = document.createElement('div')
    container.classList.add('hidden')
    container.classList.add('card')
    const title = document.createElement('h1')
    const question = document.createElement('h2')
    const answer = document.createElement('p')

    title.textContent = card.title
    question.textContent = card.question
    answer.textContent = card.answer

    container.appendChild(title)
    container.appendChild(question)
    container.appendChild(answer)
    wrapper.appendChild(container)

    link.addEventListener('click', () => {
      container.classList.toggle('hidden')
      link.textContent === 'show'
        ? (link.textContent = 'hide')
        : (link.textContent = 'show')
    })
  })
}

// fetch('http://localhost:3333/cards')
//   .then(res => res.json())
//   .then(cards => cards.forEach(createLink))
//   .catch(err => console.log('--->', err))
// function createLink(card) {
//   const el = document.createElement('a')
//   el.textContent = card.title
//   el.href = 'http://localhost:3333/cards/' + card.id
//   el.style.display = 'block'
//   document.body.append(el)
// }
