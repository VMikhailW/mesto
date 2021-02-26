
let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__btn_action_close');
let nameProfile = document.querySelector(".profile__name")
let aboutProfile = document.querySelector(".profile__caption")
let editProfile = document.querySelector(".profile__edit-button")
let popupEdit = document.querySelector("#popup")
let formEditProfile = popupEdit.querySelector(".popup__form")
let nameInput = formEditProfile.querySelector("#name-input")
let aboutInput = formEditProfile.querySelector("#about-input")


function handlePopupEditOpen() {
  openPopup(popupEdit)
  nameInput.value = nameProfile.textContent
  aboutInput.value = aboutProfile.textContent
  
}

function handlePopupEditSubmit(evt) {
  evt.preventDefault()
  nameProfile.textContent = nameInput.value
  aboutProfile.textContent = aboutInput.value
  closePopup(popupEdit)

}

function openPopup () {
  popup.classList.add('popup__active');
} 
openButton.addEventListener('click' , openPopup); 


function closePopup() {
  popup.classList.remove('popup__active');
}

closeButton.addEventListener('click', closePopup);
editProfile.addEventListener("click", handlePopupEditOpen)
formEditProfile.addEventListener("submit", handlePopupEditSubmit)