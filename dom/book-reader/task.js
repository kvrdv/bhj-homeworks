// Работающий код:
const book = document.querySelector('.book');

const fontButtons = document.querySelectorAll('.font-size');
fontButtons[0].dataset.size = 'book_fs-small';
fontButtons[1].dataset.size = 'basicFont';
fontButtons[2].dataset.size = 'book_fs-big';

for (let i = 0; i < fontButtons.length; i++) {
  fontButtons[i].addEventListener('click', function (e) {
    e.preventDefault();
    fontButtons.forEach(e => e.classList.remove('font-size_active'));
    fontButtons[i].classList.add('font-size_active');
    book.classList = 'book';
    book.classList.toggle(fontButtons[i].dataset.size);
    return false;
  });
};