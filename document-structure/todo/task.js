// Форма и ее значение:
let form = document.querySelector('.tasks__control');
let formInput = document.querySelector('.tasks__input')

// Cписок задач:
let list = document.querySelector('.tasks__list');

// Обработчик события - отправка формы:
form.addEventListener('submit', function (e) {

  // Предотвращаем перезагрузку страницы:
  e.preventDefault();

  // Добавляем задачу если форма не пустая и делаем предупреждение, если пустая:
  if (formInput.value !== '') {
    list.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title">Тут должен быть текст</div><a href="#" class="task__remove">&times;</a></div>');
    let task = document.querySelectorAll('.task__title');

    // Поскольку задачу добавляем в конец списка, тут нам нужен последний элемент массива:
    task[task.length - 1].textContent = formInput.value;

    // Получаем список закрывающих кнопок:
    let closeButtons = document.querySelectorAll('.task__remove');

    // Удаляем задачу, при нажатии на крестик:
    closeButtons[closeButtons.length - 1].addEventListener('click', (deleteTask) => {
      deleteTask.currentTarget.parentElement.remove()
    });

    // Очищаем форму:
    formInput.value = '';

  } else if (formInput.value == '') {
    alert('Невозможно добавить пустую задачу!');
  };
});