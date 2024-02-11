function toggleLanguageMenu() {
    var languageMenu = document.getElementById("language");
    if (languageMenu.style.display === 'none' || languageMenu.style.display === '') {
      languageMenu.style.display = 'initial';
      document.addEventListener('click', closeLanguageMenu);
    } else {
      languageMenu.style.display = 'none';
      document.removeEventListener('click', closeLanguageMenu);
    }
  }

  function closeLanguageMenu(event) {
    var languageMenu = document.getElementById('language');
    if (!languageMenu.contains(event.target)) {
      languageMenu.style.display = 'none';
      document.removeEventListener('click', closeLanguageMenu);
    }
  }