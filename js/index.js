const likeButtons = document.querySelectorAll('.element__like-button');

likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('element__like-button_active');
  });
});
