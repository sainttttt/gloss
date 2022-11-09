function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.querySelector('body').className = themeName;
}




(function () {
  const theme = localStorage.getItem('theme');
  if (theme) { 
    setTheme(theme);
  }
})();

