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

const themeToggle = document.getElementById("themeToggle");


// helper: greeting string

function greetingText() {

  const now = new Date();

  const h = now.getHours();

  if (h < 12) return `Good morning, my jaanu ☀️`;

  if (h < 18) return `Good afternoon, my jaan 🌼`;

  return `Good evening, my jaanu 🌙`;

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

    document.documentElement.classList.add("animating");

    envelopeWrap.classList.add("envelope-open");

    heart.style.transition = "opacity .6s";

    heart.style.opacity = "0";

    setTimeout(() => {

      envelopeWrap.classList.add("envelope-move");

      welcome.innerHTML = `${greetingText()}<br><small>${new Date().toDateString()}</small>`;

      welcome.classList.add("show");

      passwordBox.style.display = "none";

      showSidebarToggle();

    }, 950);

  } else {

    passwordBox.animate([

      { transform: 'translateX(0)' },

      { transform: 'translateX(-8px)' },

      { transform: 'translateX(8px)' },

      { transform: 'translateX(0)' }

    ], { duration: 320, iterations: 1 });

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


  // load saved theme

  const saved = localStorage.getItem(THEME_KEY);

  if (saved === 'dark') {

    document.body.classList.add('dark');

    themeToggle.textContent = "☀️";

  }


  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");

  });

})(); 
