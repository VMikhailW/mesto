export const editProfile = document.querySelector(".profile__edit-button")
export const placeButtonAdd = document.querySelector(".profile__add-button")

export const formEditProfile = document.querySelector(".popup__form")
export const nameInput = formEditProfile.elements.name
export const aboutInput = formEditProfile.elements.about

export const formNewCard = document.forms['new-card']

export const formSetting = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}