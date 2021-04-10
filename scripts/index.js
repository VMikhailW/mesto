import Card from './card.js'
import FormValidator from './FormValidator.js'
import initialCards from './cards.js'
import { openPopup, closePopup } from './constants.js'


const nameProfile = document.querySelector(".profile__name")
const aboutProfile = document.querySelector(".profile__caption")

const editProfile = document.querySelector(".profile__edit-button")
const popupEdit = document.querySelector(".popup_type_edit")
const formEditProfile = popupEdit.querySelector(".popup__form")
const nameInput = formEditProfile.querySelector("#name-input")
const aboutInput = formEditProfile.querySelector("#about-input")

const placeButtonAdd = document.querySelector(".profile__add-button")
const popupNewCard = document.querySelector(".popup_type_new-card")
const formNewCard = popupNewCard.querySelector(".popup__form")
const placeInput = formNewCard.querySelector("#place-input")
const imgInput = formNewCard.querySelector("#img-input")



const placesList = document.querySelector(".elements__list")



//Создание карточки1
const createCard = (name, link, cardSelector) => {
    const card = new Card(name, link, cardSelector)
    const cardElement = card.generateCard()
    placesList.prepend(cardElement)
}

//Добавляем карточки на старте2
initialCards.forEach((item) => {
    createCard(item.name, item.link, '.card_template')
})


//Открываем модалку "Новое место"3
function handlePopupNewCardOpen() {
    openPopup(popupNewCard)
    formNewCard.reset()
    cardFormValidator.toggleButtonState()
}

//Добавляем карточку нового места4
function handlePopupNewCardSubmit(evt) {
    evt.preventDefault()
    createCard(placeInput.value, imgInput.value, '.card_template')
    closePopup(popupNewCard)
}

//Открытие модального окна "Редактирование профиля"
function handlePopupEditOpen() {
    openPopup(popupEdit)
    nameInput.value = nameProfile.textContent
    aboutInput.value = aboutProfile.textContent
}
//Редактирование окна
function handlePopupEditSubmit(evt) {
    evt.preventDefault()
    nameProfile.textContent = nameInput.value
    aboutProfile.textContent = aboutInput.value
    closePopup(popupEdit)
}


const formSetting = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}

const profileFormValidator = new FormValidator(formSetting, formEditProfile)
profileFormValidator.enableValidation()

const cardFormValidator = new FormValidator(formSetting, formNewCard)
cardFormValidator.enableValidation()


editProfile.addEventListener("click", handlePopupEditOpen)
formEditProfile.addEventListener("submit", handlePopupEditSubmit)
placeButtonAdd.addEventListener("click", handlePopupNewCardOpen)
formNewCard.addEventListener("submit", handlePopupNewCardSubmit)