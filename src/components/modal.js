const cardImagePopup = document.querySelector(".popup_type_image");
const imageCaption = cardImagePopup.querySelector(".popup__caption");
const popupImage = cardImagePopup.querySelector(".popup__image");
const popupCloseBtn = cardImagePopup.querySelector(".popup__close");

let currentPopup = null;

export function openPopup(popupElement) {
  popupElement.classList.add("popup_is-opened");
  popupElement.classList.add("popup_is-animated");
  currentPopup = popupElement;

  document.addEventListener("keydown", handleEscClose);
}

export function closePopup(popupElement) {
  popupElement.classList.remove("popup_is-opened");

  if (currentPopup === popupElement) {
    currentPopup = null;
  }

  document.removeEventListener("keydown", handleEscClose);
}

function handleEscClose(evt) {
  if (evt.key === "Escape" && currentPopup) {
    closePopup(currentPopup);
  }
}
document.addEventListener("keydown", handleEscClose);

export function openImagePopup(link, caption) {
  if (!cardImagePopup || !popupImage || !imageCaption) return;
  imageCaption.textContent = caption;
  popupImage.alt = caption;
  popupImage.src = link;

  openPopup(cardImagePopup);
}

export function closeImagePopup() {
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
