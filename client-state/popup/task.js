// Очистка cookie:
// document.cookie = 'modalAction=; Expires=Thu, 01 Jan 1969 00:00:00 GMT';

// Всплывающее окно:
let modal = document.getElementById('subscribe-modal');

// При открытии страницы показываем или не показываем всплывающее окно, в зависимости от того, закрывали ли мы его когда либо или нет:
if (document.cookie.includes('modalAction=true')) {
  modal.classList.remove('modal_active');
} else {
  modal.classList.add('modal_active');
};

// Закрываем окно, при клике на крестик и добавляем cookie:
let modalClose = document.querySelector('.modal__close');
modalClose.addEventListener('click', function () {
  modal.classList.remove('modal_active');
  document.cookie = 'modalAction=true Expires=Mon, 17 November 2020 17:17:17 GMT;';
});


