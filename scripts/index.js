const popups = document.querySelectorAll(".popup");
const closeButton = document.querySelectorAll(".popup__btn_action_close");

const nameProfile = document.querySelector(".profile__name")
const aboutProfile = document.querySelector(".profile__caption")

const editProfile = document.querySelector(".profile__edit-button")
const popupEdit = document.querySelector(".popup_type_edit")
const formEditProfile = popupEdit.querySelector(".form")
const nameInput = formEditProfile.querySelector("#name-input")
const aboutInput = formEditProfile.querySelector("#about-input")

const placeButtonAdd = document.querySelector(".profile__add-button")
const popupNewCard = document.querySelector(".popup_type_new-card")
const formNewCard = popupNewCard.querySelector(".form")
const placeInput = formNewCard.querySelector("#place-input")
const imgInput = formNewCard.querySelector("#img-input")

const popupImage = document.querySelector(".popup_type_image")
const image = document.querySelector(".popup__image")
const figcaption = document.querySelector(".popup__figcaption")

const placesList = document.querySelector(".elements__list")
const cardTemplate = document.querySelector("#card_template").content

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
  const elementPic = cardElement.querySelector('.element__pic');
  cardElement.querySelector(".element__title").textContent = name
  elementPic.src = link
  elementPic.alt = name

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

//Закрытие модальных окон
function closePopup(popup) {
  popup.classList.remove("popup_active")
  document.removeEventListener('keydown', handleEscUp)
}

//Закрытие модалки на Esc
function handleEscUp(evt) {
  const activePopup = document.querySelector('.popup_active')
  if (evt.key === 'Escape') {
      closePopup(activePopup)
  }
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
  document.addEventListener('keydown', handleEscUp)
}

editProfile.addEventListener("click", handlePopupEditOpen)
placeButtonAdd.addEventListener("click", handlePopupNewCardOpen)
formEditProfile.addEventListener("submit", handlePopupEditSubmit)
formNewCard.addEventListener("submit", handlePopupNewCardSubmit)