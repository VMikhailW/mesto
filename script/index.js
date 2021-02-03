const openButton = document.querySelector('.profile__edit-button');
const overlay = document.querySelector('.overlay');
const closeButton = overlay.querySelector('.popup__close-button');
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
  overlay.classList.remove('overlay__active');
}

function editUserInfo() {
  userName.textContent = inputName.value;
  userAbout.textContent = inputAbout.value;
}

openButton.addEventListener('click', () => {
  overlay.classList.add('overlay__active');
});

closeButton.addEventListener('click', closePopup);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  editUserInfo();
  closePopup();
});

overlay.addEventListener('click', (event) => {
  if (event.target === event.currentTarget) {
    closePopup();
  }
});

