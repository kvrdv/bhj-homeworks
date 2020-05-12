const image = document.getElementById("cookie");
const counter = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let lastClick = 0;

function afterClick() {
  let newClick = (new Date()).getTime();   
  speed.textContent = (1 / ((newClick - lastClick) / 1000)).toFixed(2);
  lastClick = newClick;

  counter.textContent = parseInt(counter.textContent) + 1;

  if (image.width == 200) {
    image.width = 175;
  } else {
    image.width = 200;
  }
};

image.onclick = afterClick;