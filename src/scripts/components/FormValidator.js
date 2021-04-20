export default class FormValidator {
    constructor(settings, formElement) {
        this._form = formElement
        this._inputList = Array.from(this._form.querySelectorAll(settings.inputSelector))
        this._button = this._form.querySelector(settings.submitButtonSelector)
        this._buttonInactive = settings.inactiveButtonClass
        this._inputErrorClass = settings.inputErrorClass
        this._errorClass = settings.errorClass
    }
    enableValidation() {
        this.toggleButtonState()
        this._setEventListeners()
    }
    toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._button.classList.add(this._buttonInactive)
            this._button.setAttribute('disabled', 'disabled')
        } else {
            this._button.classList.remove(this._buttonInactive)
            this._button.removeAttribute('disabled', 'disabled')
        }
    }
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }
    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement)
        } else {
            this._hideInputError(inputElement)
        }
    }
    _showInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.add(this._inputErrorClass)
        errorElement.textContent = inputElement.validationMessage
        errorElement.classList.add(this._errorClass)
    }
    _hideInputError(inputElement) {
        const errorElement = this._form.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.remove(this._inputErrorClass)
        errorElement.classList.remove(this._errorClass)
        errorElement.textContent = ''
    }
    _setEventListeners() {
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement)
                this.toggleButtonState()
            })
        })
    }
}