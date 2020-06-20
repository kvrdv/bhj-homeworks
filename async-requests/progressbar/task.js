// Полоска прогресса:
const progress = document.getElementById('progress');

// Форма загрузки и файл, который мы добавляем:
let form = document.getElementById('form');
let inputFile = form.querySelector('input');;

// Обработчик события - отправка формы:
form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Загруженный файл:
  let file = inputFile.files[0];

  // Ограничиваем максимальное значение полоски прогресса размером файла:
  progress.max = file.size;

  // Делаем запрос на отправку:
  let formData = new FormData(form);
  let request = new XMLHttpRequest();
  formData.append('file', file);
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
  request.upload.onprogress = (e) => progress.value = e.loaded;
  request.send(formData);
});