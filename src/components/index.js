import '../pages/index.css';
import { createCardElement, removeCard, likeCard } from './card.js';
import { openPopup, closePopup,} from './modal.js';
import { initialCards } from './cards.js'


const placesList = document.querySelector('.places__list');

const cardImagePopup = document.querySelector(".popup_type_image");
const imageCaption = cardImagePopup.querySelector(".popup__caption");
const popupImage = cardImagePopup.querySelector(".popup__image");
const popupCloseBtn = cardImagePopup.querySelector(".popup__close");

const editOpenBtn = document.getElementById('edit-button')
const editPopup = document.querySelector('.popup_type_edit');
const editCloseBtn = editPopup.querySelector('.popup__close');

const formEditElement = document.querySelector('.popup__form');
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


function openImagePopup(link, caption) {
  if (!cardImagePopup || !popupImage || !imageCaption) return;
  imageCaption.textContent = caption;
  popupImage.alt = caption;
  popupImage.src = link;

  openPopup(cardImagePopup);
}

function closeImagePopup() {
  closePopup(cardImagePopup);
}

cardImagePopup.addEventListener("click", function (evt) {
  if (evt.target === cardImagePopup) {
    closeImagePopup();
  }
});

popupCloseBtn.addEventListener("click", function () {
  closeImagePopup();
});

initialCards.forEach(cardData => {
    const cardElement = createCardElement(cardData, removeCard, likeCard, openImagePopup);
    placesList.appendChild(cardElement);
  });

editOpenBtn.addEventListener('click', function(){
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  
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

function editFormSubmit(evt) {
    evt.preventDefault();
   const nameValue = nameInput.value;
   const descriptionValue = jobInput.value
   
   profileTitle.textContent = nameValue;
   profileDescription.textContent = descriptionValue;
   closePopup(editPopup);
   formEditElement.reset();
};
formEditElement.addEventListener('submit', editFormSubmit); 

function addFormSubmit(evt){
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
  formAddElement.reset();
}

formAddElement.addEventListener('submit', addFormSubmit);
