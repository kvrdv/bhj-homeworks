// Создаем новый объект-запрос:
let request = new XMLHttpRequest();

// Определяем метод, адрес и формат ответа:
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.responseType = 'json';

// Отправляем запрос:
request.send();

// Навешиваем обработчик на событие успешного ответа от сервера:
request.addEventListener('readystatechange', () => {
  if (request.readyState === request.DONE && request.status === 200) {

    // Получаем данные необходимого вида из JSON ответа:
    let currencies = request.response.response.Valute;

    for (let i in currencies) {
      // Получаем код и курс:
      let jsonCode = currencies[i].CharCode;
      let jsonValue = currencies[i].Value;

      // Список валют:
      let list = document.getElementById('items');

      // создаем элемент:
      list.insertAdjacentHTML('beforeEnd', '<div class="item"><div class="item__code">USD</div><div class="item__value">32</div><div class="item__currency">руб.</div></div>');
      let itemCode = document.querySelectorAll('.item__code');
      let itemValue = document.querySelectorAll('.item__value')
      
      // Записываем соответствующий код и курс:
      itemCode[itemCode.length - 1].textContent = jsonCode;
      itemValue[itemValue.length - 1].textContent = jsonValue;
    };

    // Убираем анимацию загрузки:
    document.querySelector('.loader').classList.remove('loader_active');
  };
});
