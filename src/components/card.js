
const cards = document.querySelector('#card-template');

export function createCardElement(cardData, buttonDelete, likeCard, handleOpen) {
    const cardElement = cards.content.cloneNode(true).querySelector('.card');

    const cardName = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
   
    cardImage.src = cardData.link;
    cardName.textContent = cardData.name;
    
    const deleteButton = cardElement.querySelector('.card__delete-button');
    deleteButton.addEventListener ('click',() => {
     buttonDelete(cardElement);  
        });
    
    const likeButton = cardElement.querySelector('.card__like-button');
   likeButton.addEventListener('click', () => {
    likeCard(likeButton); 
  });

  cardImage.addEventListener('click', () => {
     handleOpen(cardData.link, cardData.name);
  });
  return cardElement;
};

export function removeCard(cardElement) {
    cardElement.remove();
  };

export function likeCard(button) {
  button.classList.toggle('card__like-button_is-active');
};