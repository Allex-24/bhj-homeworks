// получение всех элементов с классом dropdown
const dropdowns = document.querySelectorAll('.dropdown');

// добавление для каждого элемента обработчики событий
dropdowns.forEach(dropdown => {
  const value = dropdown.querySelector('.dropdown__value');
  const list = dropdown.querySelector('.dropdown__list');
  const items = dropdown.querySelectorAll('.dropdown__item');

  // создание обработчика клика на кнопке
  value.addEventListener('click', () => {
    list.classList.toggle('dropdown__list_active');
  });

  // обработчик клика на элементе списка
  items.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); // запрещаем переход по ссылке
      value.textContent = item.textContent; // меняем текст кнопки
      list.classList.remove('dropdown__list_active'); // скрываем список
    });
  });
});
