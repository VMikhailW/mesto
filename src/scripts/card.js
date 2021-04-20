export default class Card {
    constructor({ name, link, handleCardClick }, cardSelector) {
        this._title = name
        this._imgLink = link
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
    }
    _getTemplate() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        return cardElement;
    }
    generateCard() {
        this._element = this._getTemplate()
        this._img = this._element.querySelector('.element__pic')
        this._setEventListeners()
        this._element.querySelector('.element__title').textContent = this._title
        this._img.src = this._imgLink
        this._img.alt = this._title

        return this._element
    }
    _handleLike() {
        this._element.querySelector('.element__like-button').classList.toggle('element__like-button_active')
    }
    _handleRemove() {
        this._element.remove()
        this._element = ''
    }
    _setEventListeners() {
        this._element.querySelector('.element__like-button').addEventListener('click', () => {
            this._handleLike()
        })
        this._element.querySelector('.element__delete ').addEventListener('click', () => {
            this._handleRemove()
        })
        this._element.querySelector('.element__pic').addEventListener('click', () => {
            this._handleCardClick()
        })
    }
}