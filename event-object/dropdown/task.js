let button = document.querySelector('.dropdown__value');
let link = document.querySelectorAll('.dropdown__link');
let list = document.querySelector('.dropdown__list');

button.addEventListener('click', function () {
  if (list.classList.contains('dropdown__list_active')) {
    list.classList.remove('dropdown__list_active');
    return false;
  } else {
    list.classList.add('dropdown__list_active');
  }
});

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function (e) {
    e.preventDefault();
    button.textContent = link[i].textContent;
    list.classList.remove('dropdown__list_active');
    return false;
  })
};