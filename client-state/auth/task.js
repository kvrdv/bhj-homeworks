// Очистка id:
// localStorage.removeItem('id');

// console.log(localStorage.getItem('id'))

// Приветствие и ID пользователя:
let welcome = document.querySelector('.welcome');
let id = document.getElementById('user_id');

// Оболочка формы:
let formWrapper = document.querySelector('.signin');

// Форма, логин и пароль из формы:
let form = document.getElementById('signin__form');
let formLogin = document.querySelectorAll('.control')[0];
let formPassword = document.querySelectorAll('.control')[1];

if (localStorage.getItem('id') != null) {
  welcome.classList.add('welcome_active');
  id.textContent = localStorage.getItem('id');
} else if (localStorage.getItem('id') == null) {
  // Показываем форму при открытии страницы:
  formWrapper.classList.add('signin_active');
};

// Обработчик события - отправка формы:
form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Делаем запрос на отправку данных на сервер:
  let formData = new FormData(form);
  let request = new XMLHttpRequest();

  // Записываем данные из формы:
  formData.login = formLogin.value;
  formData.password = formPassword.value;

  // Отправляем запрос:
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
  request.responseType = 'json';
  request.send(formData);

  // Обработчки события ответ от сервера:
  request.addEventListener('readystatechange', () => {
    if (request.readyState === request.DONE && request.status === 200) {

      // В зависимости от успешной или неуспешной авторизации:
      if (request.response.success === false) {
        alert('Неверный логин/пароль');
      } else {
        console.log(request.response.user_id);
        formWrapper.classList.remove('signin_active');
        welcome.classList.add('welcome_active');
        id.textContent = request.response.user_id;
        localStorage.setItem('id', request.response.user_id);
      };

      // Обнуляем данные формы:
      formLogin.value = '';
      formPassword.value = '';
    };
  });
});