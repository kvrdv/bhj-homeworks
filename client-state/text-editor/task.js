// Получаем форму:
let textForm = document.getElementById('editor');

// Сохраняем текст в localStorage:
localStorage.setItem('message', textForm.value);

// При загрузке страницы, возвращаем в форму сохраненный в localStorage текст:
window.addEventListener('load', () => {
  let savedMessage = localStorage.getItem('message');
  textForm.value = savedMessage;
});

// При клике на кнопку очищаем localStorage:
let clearButton = document.querySelector('.clear_button');
clearButton.addEventListener('click', () => {
  localStorage.clear();
  textForm.value = '';
});