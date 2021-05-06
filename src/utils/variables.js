export const editButton = document.querySelector('.profile__button');
const editPopup = document.querySelector('.popup_type_edit');
export const editForm = editPopup.querySelector('.popup__form');
export const nameInput = editForm.querySelector('.popup__input_type_name');
export const jobInput = editForm.querySelector('.popup__input_type_about');
export const addButton = document.querySelector('.button_add');
const addPopup = document.querySelector('.popup_type_add');
export const addForm = addPopup.querySelector('.popup__form');
export const picturesTemplateSelector = '.pictures-template';
export const userName = document.querySelector('.profile__title');
export const userAbout = document.querySelector('.profile__subtitle');
export const avatarImg = document.querySelector('.avatar');
const avatarPopup = document.querySelector('.popup_type_avatar');
export const avatarForm = avatarPopup.querySelector('.popup__form');
export const allSavedSubmits = document.querySelectorAll('.popup__submit_type_save');
export const token = '26429215-8866-45e2-ac2c-d933789bf3b4';
export const url = 'https://mesto.nomoreparties.co/v1/cohort-23/';

export const validationParams = {
    formElement: '.popup__form',
    inputElement: '.popup__input',
    buttonElement: '.popup__submit',
    inactiveButtonClass: 'popup__submit_type_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorShowClass: 'popup__error_type_active',
    controlSelectorClass: '.popup__control',
    errorClass: '.popup__error'
};