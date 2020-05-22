let link = document.querySelectorAll(".dropdown__link");

link.forEach(function (elementItem) {
  let button = document.querySelector(".dropdown__value");
  let dropDown = document.querySelector(".dropdown__list");
    
  // Открытие/закрытие выпадающего меню по клику на кнопку:
  button.onclick = function () {
    if (dropDown.classList.contains("dropdown__list_active")) {
      dropDown.classList.remove("dropdown__list_active");
    } else {
      dropDown.classList.add("dropdown__list_active");
    }
  };

  // Смена значения по клику:
  elementItem.onclick = function () {
    let textValue = document.querySelector(".dropdown__value").textContent;
    textValue = elementItem.textContent;
    dropDown.classList.remove("dropdown__list_active");
    return false;
  };
}); 