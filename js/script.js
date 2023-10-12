// Получаем ссылку на элемент <body>
const body = document.querySelector('body');

// Функция для переключения темы
function toggleTheme() {
  if (body.classList.contains('light-theme')) {
    // Убираем класс светлой темы и добавляем класс тёмной темы
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  } else {
    // Убираем класс тёмной темы и добавляем класс светлой темы
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  }
}

// Пример: добавляем обработчик клика на кнопку для переключения темы
const themeToggleButton = document.querySelector('#theme-toggle-button'); // замените #theme-toggle-button на селектор вашей кнопки
themeToggleButton.addEventListener('click', toggleTheme);
