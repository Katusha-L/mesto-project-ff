const cards = document.querySelector('#card-template');

export function createCardElement(cardData, buttonDelete, likeCard, handleOpen) {
    const cardElement = cards.content.cloneNode(true).querySelector('.card');

    const cardName = cardElement.querySelector('.card__title');
    const cardImage = cardElement.querySelector('.card__image');
    
  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");

  cardName.textContent = cardData.name;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;

  deleteButton.addEventListener("click", function () {
    buttonDelete(cardElement);
  });

  likeButton.addEventListener("click", function () {
    likeCard(likeButton);
  });

  cardImage.addEventListener("click", function () {
    handleOpen(cardData.link, cardData.name);
  });

  return cardElement;
};

export function removeCard(cardElement) {
  cardElement.remove();
};

export function likeCard(button) {
  button.classList.toggle("card__like-button_is-active");
};
