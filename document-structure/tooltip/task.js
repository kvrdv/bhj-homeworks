// Получаем все выделенные фразы:
const yellowText = document.querySelectorAll('.has-tooltip');

// Создаем подсказку:
yellowText[0].insertAdjacentHTML('beforeEnd', '<div class="tooltip" style="left: 0; top: 0">Проверка!</div>');
let tooltip = document.querySelector('.tooltip');

yellowText.forEach((text) => {
  text.addEventListener('click', (event) => {

    // Предотвращаем обновление страницы:
    event.preventDefault();
    
    if (tooltip.classList.contains('tooltip_active') === true) {
      
      // Удалем существующую подсказку:
      tooltip.classList.remove('tooltip_active');

    } else {

      // Получаем текст подсказки и позицию элемента на странице:
      let tooltipText = event.currentTarget.getAttribute('title');
      let tooltipLeft = event.currentTarget.offsetLeft;
      let tooltipTop = event.currentTarget.offsetTop + 18;

      // Добавляем подсказку:
      tooltip.classList.add('tooltip_active');
      tooltip.textContent = tooltipText;
      tooltip.style.left = tooltipLeft + "px";
      tooltip.style.top = tooltipTop + "px";
    };
  });
});




















// Для каждой выделенной фразы, вешаем обработчик события клика:
// yellowText.forEach((text) => {
//   text.addEventListener('click', (event) => {

//     // Предотвращаем обновление страницы:
//     event.preventDefault();

//     // Удалем существующую подсказку:
//     if (document.querySelector('.tooltip_active') != null) {
//       document.querySelector('.tooltip_active').remove();
//     };

//     // Получаем текст подсказки и позицию элемента на странице:
//     let tooltipText = event.currentTarget.getAttribute('title');
//     let tooltipLeft = event.currentTarget.offsetLeft;
//     let tooltipTop = event.currentTarget.offsetTop + 18;

//     // Добавляем подсказку:
//     event.currentTarget.insertAdjacentHTML('beforeEnd', '<div class="tooltip tooltip_active" style="left: 0; top: 0">Проверка!</div>');
//     document.querySelector('.tooltip_active').textContent = tooltipText;
//     document.querySelector('.tooltip_active').style.left = tooltipLeft + "px";
//     document.querySelector('.tooltip_active').style.top = tooltipTop + "px";

//   });
// });