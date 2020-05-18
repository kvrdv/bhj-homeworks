let sliderItem = Array.from(document.getElementsByClassName("slider__item"));
const sliderArrow = document.getElementsByClassName("slider__arrow");
const active = "slider__item slider__item_active";
const hidden = "slider__item";
let count = 0;

const dots = Array.from(document.getElementsByClassName("slider__dot"));
const activeDot = "slider__dot slider__dot_active";
const hiddenDot = "slider__dot";
dots[count].className = activeDot;

// Спрятать слайд
function hideSlide() {
  sliderItem[count].className = hidden;
  dots[count].className = hiddenDot;
}

// Переключить слайд
function moveSlide() {
  if (count < 0) {
    count = sliderItem.length - 1;
  } else if (count === sliderItem.length) {
    count = 0;
  };
  sliderItem[count].className = active;
  dots[count].className = activeDot;
}

// Назад
sliderArrow[0].onclick = function () {
  console.log("Back");
  hideSlide();
  count--;
  moveSlide();
}

// Вперед
sliderArrow[1].onclick = function () {
  console.log("Forward");
  hideSlide();
  count++;
  moveSlide();
}

// Точки
dots.forEach((dot, i) => {
  dot.onclick = () => {
    hideSlide();
    count = i;
    moveSlide();
  };
});