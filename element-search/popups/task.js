// Для того, чтобы окно было активно (показывалось на странице), добавьте ему класс modal_active
// В момент запуска скрипта, покажите окно #modal_main:
let modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");

// Сделайте закрытие активного окна по нажатию на его элемент с классом modal__close:
let modalClose = document.getElementsByClassName("modal__close");
modalClose[0].onclick = function() {
  modalMain.classList.remove("modal_active");
}

// По нажатию на элемент с классом show-success покажите окно #modal_success:
let showSuccess = document.getElementsByClassName("show-success");
let modalSuccess = document.getElementById("modal_success");

showSuccess[0].onclick = function() {
  modalMain.classList.remove("modal_active");
  modalSuccess.classList.add("modal_active");
}

modalClose[2].onclick = function() {
  modalSuccess.classList.remove("modal_active");
}