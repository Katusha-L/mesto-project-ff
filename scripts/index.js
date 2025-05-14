

function createCardElement(cardData, buttomDelete) {
    const cards = document.querySelector('#card-template');
    const cardElement = cards.content.cloneNode(true).querySelector('.card');

    const cardName = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
   
    cardImage.src = cardData.link;
    cardName.textContent = cardData.name;
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener ('click',() => 
        {
            buttomDelete(cardData, cardElement);  
        });
  return cardElement;
}
const placesList = document.querySelector('.places__list');

initialCards.forEach(cardData => {
    const cardElement = createCardElement(cardData, removeCard);
    placesList.appendChild(cardElement);
  });

function removeCard(cardData, cardElement) {
    cardElement.remove();
  }

