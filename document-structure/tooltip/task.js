// Получаем все выделенные фразы:
const yellowText = document.querySelectorAll('.has-tooltip');

// Для каждой выделенной фразы, вешаем обработчик события клика:
yellowText.forEach((text) => {
  text.addEventListener('click', (event) => {

    // Предотвращаем обновление страницы:
    event.preventDefault();

    // Удалем существующую подсказку:
    if (document.querySelector('.tooltip_active') != null) {
      document.querySelector('.tooltip_active').remove();
    };

    // Получаем текст подсказки и позицию элемента на странице:
    let tooltipText = event.currentTarget.getAttribute('title');
    let tooltipLeft = event.currentTarget.offsetLeft;
    let tooltipTop = event.currentTarget.offsetTop + 18;

    // Добавляем подсказку:
    event.currentTarget.insertAdjacentHTML('beforeEnd', '<div class="tooltip tooltip_active" style="left: 0; top: 0">Проверка!</div>');
    document.querySelector('.tooltip_active').textContent = tooltipText;
    document.querySelector('.tooltip_active').style.left = tooltipLeft + "px";
    document.querySelector('.tooltip_active').style.top = tooltipTop + "px";

  });
});