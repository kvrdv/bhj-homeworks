let now = new Date().getHours() + ':' + new Date().getMinutes();
const chatWidget = document.querySelector('.chat-widget');
const messages = document.querySelector('.chat-widget__messages');
const inputForm = document.querySelector('.chat-widget__input');

// Открытие чата, при клике:
chatWidget.addEventListener('click', function () {
  chatWidget.classList.add('chat-widget_active');
});

// Приветствие чат-бота:
messages.insertAdjacentHTML('afterBegin', `
  <div class="message">
    <div class="message__time"></div>
    <div class="message__text">Добрый день!</div>
  </div>
  `);
document.querySelector('.message__time').textContent = now;

// Генератор рандомного ответа:
function randomPhrase() {
  const phrases = [
    'Опять ты?',
    'Когда ты уже угомонишься...',
    'Я сейчас не готов с тобой разговаривать.',
    'Всего доброго!'];
  const randomizer = Math.floor(Math.random() * phrases.length);
  let phrase = phrases[randomizer];
  return phrase;
};

// Отправка сообщения и автоматический ответ бота:
document.querySelector('.chat-widget__input').addEventListener('keydown', function (e) {
  if ((e.keyCode === 13) && (this.value !== '')) {
    
    // Пользователь:
    messages.insertAdjacentHTML('afterBegin', `
  <div class="message message_client">
    <div class="message__time"></div>
    <div class="message__text"></div>
  </div>
`);
    document.querySelector('.message__time').textContent = now;
    document.querySelector('.message__text').textContent = this.value;

    // Бот:
    messages.insertAdjacentHTML('afterBegin', `
  <div class="message">
    <div class="message__time"></div>
    <div class="message__text">Добрый день!</div>
  </div>
  `);
    document.querySelector('.message__time').textContent = now;
    document.querySelector('.message__text').textContent = randomPhrase();

    // Очистка формы после отправки сообщения:
    this.value = '';
  };
});