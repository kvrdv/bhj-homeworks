const cases = document.querySelectorAll('.rotator__case');

let timer = 1000;

function countdown() {
  let randomCase = cases[Math.floor(Math.random() * cases.length)];
  randomCase.style.color = randomCase.dataset.color;

  if (timer <= 0) {
    cases.forEach(e => e.classList.remove('rotator__case_active'));
    randomCase.classList.toggle('rotator__case_active');
  } else {
    timer -= 1000;
  }
}
setInterval(countdown, 1000);
