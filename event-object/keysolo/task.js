class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    const timer = document.getElementById("timer");
    timer.textContent = document.querySelectorAll('.symbol').length;
    let target = this;
    let targetLetter = target.currentSymbol;

    function countdown() {
      if (timer.textContent == 0) {
        alert('Время вышло!');
        return location.reload();
      } else {
        timer.textContent -= 1;
      }
    }
    setInterval(countdown, 1000);

    function pressedKey(e) {
      if (targetLetter.textContent.toLowerCase() == e.key.toLowerCase()) {
        target.success();
        if (targetLetter.nextSibling == null) {
          targetLetter = target.currentSymbol;
          timer.textContent = document.querySelectorAll('.symbol').length;
        } else {
          targetLetter = targetLetter.nextSibling;
        }
      } else {
        target.fail();
        targetLetter = target.currentSymbol;
        timer.textContent = document.querySelectorAll('.symbol').length;
      }
    }
    document.addEventListener('keydown', pressedKey);
  }

  success() {
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;
    if (this.currentSymbol !== null) {
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.setNewWord();
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.setNewWord();
  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))








