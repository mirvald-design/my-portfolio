function switchLanguage(language) {
  if (language === 'uk') {
      document.documentElement.classList.add('uk');
      document.documentElement.classList.remove('en');
  } else {
      document.documentElement.classList.add('en');
      document.documentElement.classList.remove('uk');
  }
  // Здесь может быть дополнительная логика для динамической подгрузки контента на выбранном языке
}

document.addEventListener('DOMContentLoaded', () => {
  let userLang = navigator.language || navigator.userLanguage; 
  userLang = userLang.substring(0, 2); // Извлекаем двухбуквенный код языка

  switch (userLang) {
      case 'uk':
          switchLanguage('uk');
          break;
      case 'en':
      default: // если язык не 'uk', то по умолчанию будет 'en'
          switchLanguage('en');
          break;
  }
});
