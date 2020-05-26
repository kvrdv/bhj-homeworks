// Массив вкладок меню:
let menuTab = Array.from(document.querySelectorAll('.tab'));

// Массив содержимого каждой вкладки:
let tabContent = Array.from(document.querySelectorAll('.tab__content'));

// Обработчик события клика на вкладку:
menuTab.forEach(function (elementMenuTab) {
  elementMenuTab.onclick = function () {
    // Прячим все содержимое и вкладки:
    document.querySelectorAll('.tab').forEach((e) => e.classList.remove('tab_active'));
    document.querySelectorAll('.tab__content').forEach((e) => e.classList.remove('tab__content_active'));
    // Показываем меню на которое кликнули и содержимое, индексы из массивов при этом соотвествуют:
    elementMenuTab.classList.add('tab_active');
    tabContent[menuTab.indexOf(elementMenuTab)].classList.add('tab__content_active');
  }
}); 