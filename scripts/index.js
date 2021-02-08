let openButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__btn_action_close');
let userName = document.querySelector('.profile__name');
let userAbout = document.querySelector('.profile__caption');
let form = document.forms.edituser;
let inputName = form.elements.name;
let inputAbout = form.elements.about;

function closePopup() {
  popup.classList.remove('popup__active');
}

function editUserInfo() {
  userName.textContent = inputName.value;
  userAbout.textContent = inputAbout.value;
}

openButton.addEventListener('click', () => {
  popup.classList.add('popup__active');
});

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  editUserInfo();
  closePopup();
});


