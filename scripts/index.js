
const cards = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');

function createCardElement(cardData, buttonDelete) {
    const cardElement = cards.content.cloneNode(true).querySelector('.card');

    const cardName = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
   
    cardImage.src = cardData.link;
    cardName.textContent = cardData.name;
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener ('click',() => 
        {
            buttonDelete(cardElement);  
        });
  return cardElement;
}

initialCards.forEach(cardData => {
    const cardElement = createCardElement(cardData, removeCard);
    placesList.appendChild(cardElement);
  });

function removeCard(cardElement) {
    cardElement.remove();
  }

