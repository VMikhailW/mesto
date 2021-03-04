const initialCards = [
  {
    name: 'Lexus IS-250',
    link: 'https://images.unsplash.com/photo-1596287665740-889843df5c32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: 'Audi RS',
    link: 'https://images.unsplash.com/photo-1606577924006-27d39b132ae2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  },
  {
    name: 'Honda civic EG',
    link: 'https://images.unsplash.com/photo-1592163964712-9b710489ee54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80'
  },
  {
    name: 'Honda civic Type-R',
    link: 'https://images.unsplash.com/photo-1592797520856-883837ddd186?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  },
  {
    name: 'Mercedes-Benz AMG',
    link: 'https://images.unsplash.com/photo-1583573278124-e8d4fd3edf3c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
  },
  {
    name: 'BMW M4',
    link: 'https://images.unsplash.com/photo-1598420942196-352027d9c86c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
  }
];
const openButton = document.querySelector(".profile__edit-button");
const popups = document.querySelectorAll(".popup");
const closeButton = document.querySelectorAll(".popup__btn_action_close");

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

const popupImage = document.querySelector(".popup_type_image")
const image = document.querySelector(".popup__image")
const figcaption = document.querySelector(".popup__figcaption")

const placesList = document.querySelector(".elements__list")
const cardTemplate = document.querySelector(".card_template").content

//Карточки из масива при загрузке страницы
function renderItemsStart() {
  initialCards.forEach((item) => {
      renderItem(item.name, item.link)
  })
}
renderItemsStart()

//Рендер карточки
function renderItem(name, link) {
  const htmlElement = createCard(name, link)
  placesList.prepend(htmlElement)
}
//Создание карточки
function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true)
  cardElement.querySelector(".element__title").textContent = name
  cardElement.querySelector(".element__pic").src = link
  cardElement.querySelector(".element__pic").alt = name

  handleLikePlace(cardElement)
  handleDeletePlace(cardElement)
  handlePopupPlaceImage(cardElement, name, link)

  return cardElement
}
//Лайк карточки
function handleLikePlace(evt) {
  evt.querySelector(".element__like-button").addEventListener("click", (evt) => {
      evt.target.classList.toggle("element__like-button_active")
  })
}
//Удаление карточки
function handleDeletePlace(evt) {
  evt.querySelector(".element__delete").addEventListener("click", (evt) => {
      evt.target.closest(".element").remove()
  })
}
//Открываем изображение в модалке
function handlePopupPlaceImage(cardElement, name, link) {
  cardElement.querySelector(".element__pic").addEventListener("click", () => {
      image.src = link
      image.alt = name
      figcaption.textContent = name
      openPopup(popupImage)
  })
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
//Открытие модального окна "Добавление карточек"
function handlePopupNewCardOpen() {
  openPopup(popupNewCard)
  formNewCard.reset()
  
}
//Добавление карточек
function handlePopupNewCardSubmit(evt) {
  evt.preventDefault()
  renderItem(placeInput.value, imgInput.value)
  closePopup(popupNewCard)

}

function closePopup(popup) {
  popup.classList.remove("popup_active")

}

popups.forEach((item) => {
  item.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup") || evt.target.classList.contains("popup__btn_action_close")) {
          closePopup(item)
      }
  })
})

function openPopup(popup) {
  popup.classList.add("popup_active")
  
}

editProfile.addEventListener("click", handlePopupEditOpen)
placeButtonAdd.addEventListener("click", handlePopupNewCardOpen)
formEditProfile.addEventListener("submit", handlePopupEditSubmit)
formNewCard.addEventListener("submit", handlePopupNewCardSubmit)