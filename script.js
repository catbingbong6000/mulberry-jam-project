/* ================= THEME TOGGLE SCRIPT ================== */
(function() {
  const THEME_KEY = 'theme_pref';

  function applyTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    themeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
  }

  // load saved theme
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'dark') applyTheme(true);

  themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark");
    applyTheme(isDark);
  });
})();
