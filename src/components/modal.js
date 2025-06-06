let currentPopup = null;

export function openPopup(popupElement) {
  popupElement.style.display = 'flex';
  popupElement.classList.add('popup_is-opened');
  currentPopup = popupElement;

  document.addEventListener('keydown', handleEscClose);
};

export function closePopup(popupElement) {
  popupElement.classList.remove('popup_is-opened');
  if (currentPopup === popupElement) {
    currentPopup = null;
  }
  setTimeout(() => {
    popupElement.style.display = 'none';
  }, 300);
  document.removeEventListener('keydown', handleEscClose);
};

function handleEscClose(evt) {
  if (evt.key === 'Escape'&& currentPopup ) {
    closePopup(currentPopup);
  }
};
document.addEventListener('keydown', handleEscClose);
