
// Навешиваем обработчик события, нажатие на клавишу enter, на форму:
document.querySelector('.tasks__input').addEventListener('keydown', function (event) { 

  // Получаем список задач:
  let list = document.querySelector('.tasks__list');

  // При нажатии на клавишу enter и при условии, что форма не пустая, добавляем задачу в конец списка:
  if ((event.keyCode === 13) && (this.value !== '')) {
    list.insertAdjacentHTML('beforeEnd', '<div class="task"><div class="task__title">Тут должен быть текст</div><a href="#" class="task__remove">&times;</a></div>');
    let task = document.querySelectorAll('.task__title');

    // Поскольку задачу добавляем в конец списка, тут нам нужен последний эелемент массива:
    task[task.length - 1].textContent = this.value;

    // Получаем список закрывающих кнопок:
    let closeButtons = document.querySelectorAll('.task__remove');

    // Удаляем задачу, при нажатии на крестик:
    closeButtons[closeButtons.length -1].addEventListener('click', (deleteTask) => {
      deleteTask.currentTarget.parentElement.remove()
    });

    // Очищаем форму и предотвращаем обновление страницы:
    this.value = '';
    event.preventDefault();
  };
});