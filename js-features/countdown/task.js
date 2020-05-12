// #1 #3
function addText() {
  const timer = document.getElementById("timer");
  if (timer.textContent == 0) {
    alert("Вы победили в конкурсе!");
    window.location.assign("https://download.mozilla.org/?product=firefox-stub&os=win&lang=ru");
    return
  } else {
    timer.textContent -= 1;
  }
}
setInterval(addText, 100)

// #2
function startTimer() {
  const rolex = document.getElementById("rolex");
  const time = rolex.textContent;
  const arr = time.split(":");
  let h = arr[0];
  let m = arr[1];
  let s = arr[2];
  if (s == 0) {
    if (m == 0) {
      if (h == 0) {
        alert("Вы победили в конкурсе!");
        return;
      }
      h--;
      m = 60;
      if (h < 10) h = "0" + h;
    }
    m--;
    if (m < 10) m = "0" + m;
    s = 59;
  }
  else s--;
  if (s < 10) s = "0" + s;
  document.getElementById("rolex").textContent = h + ":" + m + ":" + s;
}
setInterval(startTimer, 1);
