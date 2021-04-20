import Card from './card.js'
import Section from './Section.js'
import UserInfo from './UserInfo.js'
import PopupWithImage from './PopupWithImage.js'
import PopupWithForm from './PopupWithForm.js'
import FormValidator from './FormValidator.js'
import initialCards from './cards.js'
import {
    editProfile,
    placeButtonAdd,
    formEditProfile,
    nameInput,
    aboutInput,
    formNewCard,
    formSetting
} from './utils.js';
import '../pages/index.css'

//Создание карточки1
const createCard = (name, link) => {
    const card = new Card({
        name: name,
        link: link,
        handleCardClick: () => {
            popupWithImage.open(name, link)
        }
    }, '.card_template')
    return card.generateCard()
}


const cardList = new Section({
    items: initialCards,
    renderer: (data) => {
        const cardElement = createCard(data.name, data.link)
        cardList.addItem(cardElement)
    }
}, '.elements__list')
cardList.renderItems()



const popupWithImage = new PopupWithImage('.popup_type_image')
popupWithImage.setEventListeners()


const userInfo = new UserInfo('.profile__name', '.profile__caption')
const popupUserForm = new PopupWithForm('.popup_type_edit', {
    formSubmit: (data) => {
        userInfo.setUserInfo(data)
    }
})
popupUserForm.setEventListeners()
const handlePopupEditOpen = () => {
    const userData = userInfo.getUserInfo()
    nameInput.value = userData.name
    aboutInput.value = userData.about
    popupUserForm.open()
}
const popupCardForm = new PopupWithForm('.popup_type_new-card', {
    formSubmit: (data) => {
        const cardElement = createCard(data.place, data.img)
        cardList.addItem(cardElement)
    }
})
popupCardForm.setEventListeners()
const handlePopupNewCardOpen = () => {
    popupCardForm.open()
}


const profileFormValidator = new FormValidator(formSetting, formEditProfile)
profileFormValidator.enableValidation()

const cardFormValidator = new FormValidator(formSetting, formNewCard)
cardFormValidator.enableValidation()


editProfile.addEventListener("click", handlePopupEditOpen)
placeButtonAdd.addEventListener("click", handlePopupNewCardOpen)