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