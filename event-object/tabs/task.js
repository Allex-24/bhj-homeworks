// Получение элемента вкладок и их содержимого
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab__content');

// Добавление обработчика событий клика на каждую вкладку
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Убираем активный класс у всех вкладок и их содержимого
    tabs.forEach(tab => tab.classList.remove('tab_active'));
    tabContents.forEach(content => content.classList.remove('tab__content_active'));
    
    // Добавление активного класса только выбранной вкладке и ее содержимому
    tab.classList.add('tab_active');
    tabContents[index].classList.add('tab__content_active');
  });
});
