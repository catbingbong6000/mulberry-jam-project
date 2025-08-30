const correctPassword = "loveyou";

// Handle password check
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const errorMsg = document.getElementById("errorMsg");
  if (input === correctPassword) {
    document.querySelector(".envelope").classList.add("open");
    setTimeout(() => {
      document.querySelector(".password-container").classList.remove("hidden");
    }, 800);
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Wrong password!";
  }
}

// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const sidebarToggle = document.getElementById("sidebarToggle");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});
