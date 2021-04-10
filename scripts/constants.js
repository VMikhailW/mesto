const popups = document.querySelectorAll(".popup")

const popupCard = document.querySelector(".popup_type_image")
const popupImage = document.querySelector(".popup__image")
const figcaption = document.querySelector(".popup__figcaption")
const esc = 'Escape'



popups.forEach((item) => {
    item.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__btn_action_close')) {
            closePopup(item)
        }
    })
})

//Открытие модалки
function openPopup(popup) {
    popup.classList.add("popup_active")
    document.addEventListener('keydown', handleEscUp)
}

//Закрытие модалки
function closePopup(popup) {
    popup.classList.remove("popup_active")
    document.removeEventListener('keydown', handleEscUp)
}

//Закрытие модалки на Esc
function handleEscUp(evt) {
    const activePopup = document.querySelector('.popup_active')
    if (evt.key === esc) {
        closePopup(activePopup)
    }
}

export { popupCard, popupImage, figcaption, openPopup, closePopup }