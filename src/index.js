import './pages/index.css';
import { initialCards } from './cards.js';

const cards = document.querySelector('#card-template');
const placesList = document.querySelector('.places__list');

const cardImagePopup = document.querySelector('.popup_type_image');
const popupCloseBtn = cardImagePopup.querySelector('.popup__close')
const imageCaption = cardImagePopup.querySelector('.popup__caption');
const popupImage = cardImagePopup.querySelector('.popup__image');

const editOpenBtn = document.getElementById('edit-button')
const editPopup = document.querySelector('.popup_type_edit');
const editCloseBtn = editPopup.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const addOpenBtn = document.getElementById('new-place');
const addPopup = document.querySelector('.popup_type_new-card');
const addCloseBtn = addPopup.querySelector('.popup__close');

const formAddElement = addPopup.querySelector('.popup__form');
const cardNameInput = addPopup.querySelector('.popup__input_type_card-name');
const linkInput = addPopup.querySelector('.popup__input_type_url');

let currentPopup = null;

function createCardElement(cardData, buttonDelete, likeCard, handleOpen) {
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

initialCards.forEach(cardData => {
    const cardElement = createCardElement(cardData, removeCard, likeCard, openImagePopup);
    placesList.appendChild(cardElement);
  });

function removeCard(cardElement) {
    cardElement.remove();
  };

function likeCard(button) {
  button.classList.toggle('card__like-button_is-active');
};

function openImagePopup(link,caption) {
  if (!cardImagePopup || !popupImage || !imageCaption) return;
 imageCaption.textContent = caption;
  popupImage.alt = caption;
  popupImage.src = link;

  openPopup(cardImagePopup);
}

function closeImagePopup() {
  closePopup(cardImagePopup);
}

cardImagePopup.addEventListener('click', function (evt) {
  if (evt.target === cardImagePopup) {
    closeImagePopup();
  }
});

popupCloseBtn.addEventListener('click', () => {
  closeImagePopup();
});

function openPopup(popupElement) {
  popupElement.classList.add('popup_is-opened');
  currentPopup = popupElement;

  document.addEventListener('keydown', handleEscClose);
};

function closePopup(popupElement) {
  popupElement.classList.remove('popup_is-opened');
  if (currentPopup === popupElement) {
    currentPopup = null;
  }
  document.removeEventListener('keydown', handleEscClose);
};

function handleEscClose(evt) {
  if (evt.key === 'Escape'&& currentPopup ) {
    closePopup(currentPopup);
  }
};
document.addEventListener('keydown', handleEscClose);

editOpenBtn.addEventListener('click', function(){
 openPopup(editPopup);
});

editCloseBtn.addEventListener('click', function () {
  closePopup(editPopup);
});

addOpenBtn.addEventListener('click', function(){
 openPopup(addPopup);
});

addCloseBtn.addEventListener('click', function () {
  closePopup(addPopup);
});

editPopup.addEventListener('click', function (evt) {
  if (evt.target === editPopup) {
    closePopup(editPopup);
  }
});

addPopup.addEventListener('click', function (evt) {
  if (evt.target === addPopup) {
    closePopup(addPopup);
  }
});

function handleFormSubmit(evt) {
    evt.preventDefault();
   const nameValue = nameInput.value;
   const descriptionValue = jobInput.value
   
   profileTitle.textContent = nameValue;
   profileDescription.textContent = descriptionValue;
   closePopup(editPopup);
   formElement.reset();
};
formElement.addEventListener('submit', handleFormSubmit); 

function handleAddFormSubmit(evt){
  evt.preventDefault();
  const cardName = cardNameInput.value;
  const cardLink = linkInput.value;
  
  const newCard = createCardElement(
    { name: cardName, link: cardLink },
    removeCard,
    likeCard,
    openImagePopup
  );

  placesList.prepend(newCard);

  closePopup(addPopup);
  formElement.reset();
}

formAddElement.addEventListener('submit', handleAddFormSubmit);

