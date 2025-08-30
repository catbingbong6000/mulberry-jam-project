// ===== CONFIGURE PASSWORD HERE =====
const CORRECT_PASSWORD = "jamjam";
// ===================================

const enterBtn = document.getElementById("enterBtn");
const passwordInput = document.getElementById("passwordInput");
const envelopeWrap = document.getElementById("envelopeWrap");
const flapGroup = document.getElementById("flapGroup");
const heart = document.getElementById("heart");
const welcome = document.getElementById("welcome");
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");
const closeSidebar = document.getElementById("closeSidebar");
const passwordBox = document.getElementById("passwordBox");

// helper: greeting string
function greetingText() {
  const now = new Date();
  const h = now.getHours();
  if (h < 12) return `Good morning, my love ☀️`;
  if (h < 18) return `Good afternoon, my love 🌼`;
  return `Good evening, my love 🌙`;
}

// show sidebar toggle (after login)
function showSidebarToggle() {
  sidebarToggle.style.display = "block";
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    sidebar.setAttribute("aria-hidden", sidebar.classList.contains("open") ? "false" : "true");
  });
  if (closeSidebar) {
    closeSidebar.addEventListener("click", () => {
      sidebar.classList.remove("open");
      sidebar.setAttribute("aria-hidden", "true");
    });
  }
}

// main check
function checkPassword() {
  const val = passwordInput.value.trim();
  if (val === CORRECT_PASSWORD) {
    // animate flap open (add class to body for CSS)
    document.documentElement.classList.add("animating");

    // open flap (CSS class)
    envelopeWrap.classList.add("envelope-open");

    // hide heart gracefully
    heart.style.transition = "opacity .6s";
    heart.style.opacity = "0";

    // move envelope up after flap animation
    setTimeout(() => {
      envelopeWrap.classList.add("envelope-move");
      // show welcome text
      welcome.innerHTML = `${greetingText()}<br><small>${new Date().toDateString()}</small>`;
      welcome.classList.add("show");
      // remove password box
      passwordBox.style.display = "none";
      // show sidebar toggle
      showSidebarToggle();
      // show sidebar automatically a little later if you want:
      // setTimeout(()=> sidebar.classList.add('open'), 700);
    }, 950);
  } else {
    // small shake animation for wrong password (quick)
    passwordBox.animate([
      { transform: 'translateX(0)' },
      { transform: 'translateX(-8px)' },
      { transform: 'translateX(8px)' },
      { transform: 'translateX(0)' }
    ], { duration: 320, iterations: 1 });
    // optional small message (not intrusive)
    welcome.classList.remove("show");
    passwordInput.value = "";
  }
}

// allow pressing Enter to submit
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") checkPassword();
});
enterBtn.addEventListener("click", checkPassword);

// initial accessibility states
sidebar.setAttribute("aria-hidden", "true");

/* ================= THEME TOGGLE SCRIPT ================== */
(function() {
  const THEME_KEY = 'theme_pref';
  const btn = document.getElementById('themeToggle');

  // Determine initial theme:
  function detectInitialTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;

    // prefer OS setting if available
    if (window.matchMedia && window.matchMedia('(prefers-color
