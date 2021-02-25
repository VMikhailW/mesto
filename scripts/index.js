let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__btn_action_close');


const nameProfile = document.querySelector(".profile__name")
const aboutProfile = document.querySelector(".profile__caption")

const editProfile = document.querySelector('.profile__edit-button')
const popupEdit = document.querySelector(".popup__container")
const formEditProfile = popupEdit.querySelector(".popup__form")
const nameInput = formEditProfile.querySelector("#name-input")
const aboutInput = formEditProfile.querySelector("#about-input")


function closePopup() {
  popup.classList.remove('popup__active');
}

openButton.addEventListener('click', () => {
  popup.classList.add('popup__active');
});

closeButton.addEventListener('click', closePopup);


function handlePopupEditOpen() {
  openPopup(popupEdit)
  nameInput.value = nameProfile.textContent
  aboutInput.value = aboutProfile.textContent
  
}

//Меняем имя и описание профиля
function handlePopupEditSubmit(evt) {
  evt.preventDefault()
  nameProfile.textContent = nameInput.value
  aboutProfile.textContent = aboutInput.value
  closePopup(popupEdit)

}

editProfile.addEventListener("click", handlePopupEditOpen)
formEditProfile.addEventListener("submit", handlePopupEditSubmit)