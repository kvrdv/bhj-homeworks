
// 1. Зарегистрируйте обработчики события click на элементах с классом menu__link
// 2. Найдите меню рядом со ссылкой. Если оно есть, переключите у него класс menu_active
// 3. Запрещайте переход по ссылке для тех, что имеют вложенное меню. 
// Остальные пункты меню должны без помех переводить пользователя на соответствующие страницы:
let menuLink = document.getElementsByClassName("menu__link");
let menuSub = document.getElementsByClassName("menu_sub");

menuLink[1].onclick = function() {
  menuSub[0].className = "menu menu_sub menu_active";
  menuSub[1].className = "menu menu_sub";
  return false; 
}

menuLink[5].onclick = function() {
  menuSub[0].className = "menu menu_sub";
  menuSub[1].className = "menu menu_sub menu_active";
  return false;
}

// 1. Одновременно не должно быть открыто более одного вложенного меню. Все остальные должны быть скрыты
// 2. Напишите код для случая, когда на странице может быть более 1 навигационного меню:
menuLink[10].onclick = function() {
  menuSub[2].className = "menu menu_sub menu_active";
  menuSub[3].className = "menu menu_sub";
  return false; 
}

menuLink[14].onclick = function() {
  menuSub[2].className = "menu menu_sub";
  menuSub[3].className = "menu menu_sub menu_active";
  return false; 
}