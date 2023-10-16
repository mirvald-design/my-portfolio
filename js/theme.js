const body = document.querySelector('body');
const themeToggleButton = document.querySelector('#theme-toggle-button');

// Function to set the theme
function setTheme(theme) {
  body.classList.remove('light-theme', 'dark-theme');
  body.classList.add(theme);
}

// Function to toggle the theme
function toggleTheme() {
  if (body.classList.contains('light-theme')) {
    setTheme('dark-theme');
  } else {
    setTheme('light-theme');
  }
  // Save the theme preference to localStorage
  localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme');
}

// Function to set the theme based on user preferences or localStorage
function setThemeFromPreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setTheme(savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark-theme');
  } else {
    setTheme('light-theme');
  }
}

// Apply the theme when the page loads
setThemeFromPreference();

// Add event listener to the theme toggle button
themeToggleButton.addEventListener('click', toggleTheme);
