console.log('it works')

// fetch('http://localhost:3333/cards')
//   .then(res => res.json())
//   .then(cards => {
//     cards.forEach(card => {
//       const link = document.createElement('a')
//       link.style.display = 'block'
//       link.setAttribute('href', `http://localhost:3333/cards/${card.id}`)
//       link.textContent = card.title
//       document.body.appendChild(link)
//     })
//   })
//   .catch(err => console.log(err))

fetch('http://localhost:3333/cards')
  .then(res => res.json())
  .then(cards => {
    cards.forEach(card => {
      const link = document.createElement('a')
      link.style.display = 'block'
      link.setAttribute('href', `http://localhost:3333/cards/${card.id}`)
      link.textContent = card.title
      document.body.appendChild(link)
    })
  })
  .catch(err => console.log(err))

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
