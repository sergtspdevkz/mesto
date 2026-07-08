const initialCards = [
  { name: 'Архыз', link: './images/arkhyz.jpg' },
  { name: 'Челябинская область', link: './images/chelyabinsk-oblast.jpg' },
  { name: 'Иваново', link: './images/ivanovo.jpg' },
  { name: 'Камчатка', link: './images/kamchatka.jpg' },
  { name: 'Холмогорский район', link: './images/kholmogorsky-rayon.jpg' },
  { name: 'Байкал', link: './images/baikal.jpg' },
];

const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const yearElement = document.querySelector('.footer__year');

function openPopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

function createCard(cardName, cardLink) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const likeButton = cardElement.querySelector('.element__like-button');

  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  return cardElement;
}

initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData.name, cardData.link);
  elementsList.append(cardElement);
});

const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
