// Вопрос и ответы:
let question = document.querySelector('.poll__title');
let answers = document.querySelector('.poll__answers');

// Делаем запрос:
let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
request.responseType = 'json';
request.send();

// Обработчик события - успешный ответа сервера на запрос:
request.addEventListener('readystatechange', () => {
  if (request.readyState === request.DONE && request.status === 200) {

    // Получаем необходимые данные из JSON:
    let jsonQuestion = request.response.data.title;
    let jsonAnswers = request.response.data.answers;

    // Добавляем данные:
    question.textContent = jsonQuestion;
    for (let i = 0; i < jsonAnswers.length; i++) {
      answers.insertAdjacentHTML('beforeEnd', '<button class="poll__answer">Хорошо</button>');
      document.querySelectorAll('.poll__answer')[i].textContent = jsonAnswers[i];
    };

    // Кнопки ответа:
    let buttons = document.querySelectorAll('.poll__answer');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Ваш голос засчитан!');
      });
    });
  };
});