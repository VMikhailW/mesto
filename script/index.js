const openButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__btn_action_close');
const userName = document.querySelector('.profile__name');
const userAbout = document.querySelector('.profile__caption');
const form = document.forms.edituser;
const inputName = form.elements.name;
const inputAbout = form.elements.about;
const button = document.querySelectorAll('.element__like-button')
button.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.target.classList.toggle("element__like-button_active")
  })
});

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

popup.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

