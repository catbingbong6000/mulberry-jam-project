const toggleButton = document.getElementById("theme-toggle");
const icon = toggleButton.querySelector(".icon");
const iframe = document.querySelector(".content-frame");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    icon.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    icon.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }

  // also inject dark mode into iframe content if possible
  if (iframe.contentWindow.document.body) {
    iframe.contentWindow.document.body.classList.toggle("dark-mode");
  }
});

// Load stored theme on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    icon.textContent = "☀️";
  }

  // Make sure iframe adopts theme
  iframe.addEventListener("load", () => {
    if (savedTheme === "dark") {
      iframe.contentWindow.document.body.classList.add("dark-mode");
    }
  });
});
