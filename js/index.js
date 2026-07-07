const likeButtons = document.querySelectorAll('.element__like-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('element__like-button_active');
  });
});

const yearElement = document.querySelector('.footer__year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
