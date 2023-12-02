const url = 'https://fakestoreapi.com/products'

  const getCharacter = async () => {
    const response = await fetch(url)
    const data = await response.json()
    data.forEach( element => makeCard(element) )
  }
  
  function makeCard(product) {
    const card = document.createElement('div')
    card.classList.add('card')
    const imgCard = document.createElement('img')
    imgCard.src = product.image
    imgCard.alt = product.title
    const nameCard = document.createElement('h2')
    nameCard.textContent = product.title
    const descriptionCard = document.createElement('p')
    descriptionCard.textContent = product.description
    
    card.appendChild(imgCard)
    card.appendChild(nameCard)
    card.appendChild(descriptionCard)
    
    document.querySelector('body').appendChild(card)
  
}

window.addEventListener('DOMContentLoaded', getCharacter)