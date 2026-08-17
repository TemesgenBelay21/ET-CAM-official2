/* ========================================
   LANGUAGE-TOGGLE.JS — English/Amharic Switching
   ======================================== */

(function() {
  const STORAGE_KEY = 'etcam-lang';
  const langToggle = document.getElementById('langToggle');
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';
  let translations = {};

  // Fetch translation file
  async function loadTranslations(lang) {
    try {
      const response = await fetch(`assets/lang/${lang}.json`);
      if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
      translations[lang] = await response.json();
    } catch (err) {
      console.error('Language load error:', err);
    }
  }

  // Apply translations to all elements with data-i18n
  function applyTranslations(lang) {
    const data = translations[lang];
    if (!data) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(data, key);
      if (value !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = value;
        } else {
          el.innerHTML = value;
        }
      }
    });

    // Update html lang attribute
    document.documentElement.lang = lang === 'am' ? 'am' : 'en';
  }

  // Get nested value from JSON using dot notation
  function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }

  // Update toggle button states
  function updateToggleState(lang) {
    if (!langToggle) return;
    langToggle.querySelectorAll('.lang-toggle__btn').forEach(btn => {
      btn.classList.remove('lang-toggle__btn--active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('lang-toggle__btn--active');
      }
    });
  }

  // Switch language
  async function switchLanguage(lang) {
    if (!translations[lang]) {
      await loadTranslations(lang);
    }
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyTranslations(lang);
    updateToggleState(lang);
  }

  // Initialize
  async function init() {
    await loadTranslations('en');
    await loadTranslations('am');

    // Apply saved language
    if (currentLang !== 'en' && translations[currentLang]) {
      applyTranslations(currentLang);
      updateToggleState(currentLang);
    }

    // Button click handlers
    if (langToggle) {
      langToggle.querySelectorAll('.lang-toggle__btn').forEach(btn => {
        btn.addEventListener('click', () => {
          const lang = btn.getAttribute('data-lang');
          if (lang !== currentLang) {
            switchLanguage(lang);
          }
        });
      });
    }
  }

  init();
})();
