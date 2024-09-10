const searchButton = document.querySelector('.search-button');
const modal = document.querySelector('.modal-container');
const modalCloseButton = document.querySelector('.modal-close-button');

searchButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.remove('modal-close');
});

modalCloseButton.addEventListener('click', () => {
  modal.classList.add('modal-close');
});
