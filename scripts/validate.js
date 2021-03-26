//Показываем ошибку
const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(settings.inputErrorClass)
    errorElement.textContent = errorMessage
    errorElement.classList.add(settings.errorClass)
}

//Прячем ошибку
const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(settings.inputErrorClass)
    errorElement.classList.remove(settings.errorClass)
    errorElement.textContent = ''
}

//Проверка поля
const isValid = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, settings)
    } else {
        hideInputError(formElement, inputElement, settings)
    }
}

//Проверяем поля
const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}


//Поиск полей и кнопки
const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector))
    const buttonElement = formElement.querySelector(settings.submitButtonSelector)

    toggleButtonState(inputList, buttonElement, settings)

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', () => {
            isValid(formElement, inputElement, settings)
            toggleButtonState(inputList, buttonElement, settings)
        })
    })
}

//Поиск формы
const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(settings.formSelector))
    formList.forEach((formElement) => {
        setEventListeners(formElement, settings)
    })
}

//Меняем кнопку
const toggleButtonState = (inputList, buttonElement, settings) => {
    
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(settings.inactiveButtonClass)
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(settings.inactiveButtonClass)
        buttonElement.disabled = false;
    }
   
}

enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
})