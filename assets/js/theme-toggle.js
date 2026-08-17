/* ========================================
   THEME-TOGGLE.JS — Dark/Light Mode Logic
   ======================================== */

(function() {
  const STORAGE_KEY = 'etcam-theme';
  const html = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');

  // Load saved theme or default to dark
  function getSavedTheme() {
    return localStorage.getItem(STORAGE_KEY) || 'dark';
  }

  // Apply theme
  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    updateToggleIcon(theme);
  }

  // Update toggle button icon
  function updateToggleIcon(theme) {
    if (!themeToggle) return;
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
      icon.className = 'fas fa-moon';
    } else {
      icon.className = 'fas fa-sun';
    }
  }

  // Initialize
  const savedTheme = getSavedTheme();
  applyTheme(savedTheme);

  // Toggle on click
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });
  }
})();
