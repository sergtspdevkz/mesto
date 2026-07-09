const initialCards = [
  { name: 'Архыз', link: './images/arkhyz.jpg' },
  { name: 'Челябинская область', link: './images/chelyabinsk-oblast.jpg' },
  { name: 'Иваново', link: './images/ivanovo.jpg' },
  { name: 'Камчатка', link: './images/kamchatka.jpg' },
  { name: 'Холмогорский район', link: './images/kholmogorsky-rayon.jpg' },
  { name: 'Байкал', link: './images/baikal.jpg' },
];

const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');

const popupImageElement = popupImage.querySelector('.popup__image');
const popupCaption = popupImage.querySelector('.popup__caption');

const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const closeEditButton = popupEdit.querySelector('.popup__close');
const closeAddButton = popupAdd.querySelector('.popup__close');
const closeImagePopupButton = popupImage.querySelector('.popup__close');

const formEdit = popupEdit.querySelector('.popup__form');
const formAdd = popupAdd.querySelector('.popup__form');

const nameInput = popupEdit.querySelector('.popup__input_type_name');
const jobInput = popupEdit.querySelector('.popup__input_type_about');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description');

const cardNameInput = popupAdd.querySelector('.popup__input_type_card-name');
const cardLinkInput = popupAdd.querySelector('.popup__input_type_card-link');

const elementsList = document.querySelector('.elements__list');
const cardTemplate = document.querySelector('#card-template').content;

const yearElement = document.querySelector('.footer__year');

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

function createCard(cardName, cardLink) {
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);

  const cardImage = cardElement.querySelector('.element__image');
  const cardTitle = cardElement.querySelector('.element__title');
  const likeButton = cardElement.querySelector('.element__like-button');
  const deleteButton = cardElement.querySelector('.element__delete-button');

  cardImage.src = cardLink;
  cardImage.alt = cardName;
  cardTitle.textContent = cardName;

  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-button_active');
  });

  deleteButton.addEventListener('click', function () {
    cardElement.remove();
  });

  cardImage.addEventListener('click', function () {
    popupImageElement.src = cardLink;
    popupImageElement.alt = cardName;
    popupCaption.textContent = cardName;
    openPopup(popupImage);
  });

  return cardElement;
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();

  const newCard = createCard(cardNameInput.value, cardLinkInput.value);
  elementsList.prepend(newCard);

  formAdd.reset();
  closePopup(popupAdd);
}

initialCards.forEach(function (cardData) {
  const cardElement = createCard(cardData.name, cardData.link);
  elementsList.append(cardElement);
});

yearElement.textContent = new Date().getFullYear();

editButton.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEdit);
});
closeEditButton.addEventListener('click', () => closePopup(popupEdit));
formEdit.addEventListener('submit', handleEditFormSubmit);

addButton.addEventListener('click', () => openPopup(popupAdd));
closeAddButton.addEventListener('click', () => closePopup(popupAdd));
formAdd.addEventListener('submit', handleAddFormSubmit);

closeImagePopupButton.addEventListener('click', () => closePopup(popupImage));
