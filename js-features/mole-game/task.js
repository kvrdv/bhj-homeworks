function getHole(index) {
  for (let i = 1; i < 10; i++) {
    let thatHole = document.getElementById(`${index}${i}`);

    thatHole.onclick = function () {
      const hit = document.getElementById('dead');
      const miss = document.getElementById('lost');

      if (thatHole.classList.contains('hole_has-mole')) {
        hit.textContent++;
      } else {
        miss.textContent++;
      }

      if (hit.textContent == 10) {
        hit.textContent = 0;
        miss.textContent = 0;
        alert("Congratulations, winner!");
      } else if (lost.textContent == 5) {
        miss.textContent = 0;
        hit.textContent = 0;
        alert("Game Over!");
      }
    }
  }
}

getHole('hole');