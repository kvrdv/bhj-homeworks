
// Берем все ссылки:
let menuLink = document.querySelectorAll(".menu__link");

// Функция, которая выполняется для каждой ссылки:
menuLink.forEach(function (elementMenuLink) {
  // Берем родительский элемент ссылки:
  let menuItem = elementMenuLink.parentElement;
  // У этого родительского элемента берем ближайший элемент-потомок с классом ".menu_sub", то есть выпадающее меню:
  let menuSub = menuItem.querySelector(".menu_sub");

  // Обрабочтик события - клик по ссылке:
  elementMenuLink.onclick = function () {
    // Закрываем все открытые выпадающие меню:
    document.querySelectorAll(".menu_active").forEach((menu_item) => menu_item.classList.remove('menu_active'));
    // Если у ссылки есть выпадающее меню, то оно открывается
    menuSub.classList.add('menu_active');
    // Запрещаем переход по ссылке:
    return false;
  }
});