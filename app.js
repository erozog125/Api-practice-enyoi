const url = 'https://thesimpsonsquoteapi.glitch.me/quotes'

function renderCharacters() {
  for (let index = 0; index <= 20; index++) {
    getCharacter()  
  }
}

function getCharacter() {
    // get:obtener
    // JSON: javascript object notation
    fetch(url)
    .then(response => response.json())
    .then( data => makeCard(data[0]))
  }
  
  // const getCharacter = async () => {
  //   const response = await fetch(url)
  //   const data = await response.json()
  //   makeCard(data[0])
  // }
  
  function makeCard(character) {
    const card = document.createElement('div')
  card.classList.add('card')
  const imgCard = document.createElement('img')
  imgCard.src = character.image
  imgCard.alt = character.character
  const nameCard = document.createElement('h2')
  nameCard.textContent = character.character
  const quoteCard = document.createElement('p')
  quoteCard.textContent = character.quote
  
  card.appendChild(imgCard)
  card.appendChild(nameCard)
  card.appendChild(quoteCard)
  
  document.querySelector('body').appendChild(card)
  
}

window.addEventListener('DOMContentLoaded', renderCharacters)