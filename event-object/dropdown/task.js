let link = document.querySelectorAll(".dropdown__link");
let button = document.querySelector(".dropdown__value");
let dropDown = document.querySelector(".dropdown__list");

button.onclick = function () {
  if (dropDown.classList.contains("dropdown__list_active")) {
    dropDown.classList.remove("dropdown__list_active");
  } else {
    dropDown.classList.add("dropdown__list_active");
  }
};

link.forEach(function (elementItem) {
  elementItem.onclick = function () {
    for (let i = 0; i < link.length; i++) {
      let textValue = document.querySelector(".dropdown__value").textContent;
      textValue = elementItem[i].textContent;
    }
    dropDown.classList.remove("dropdown__list_active");
    return false;
  };
}); 