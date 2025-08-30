// Password protection
function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "mypassword"; // change this to your secret

  if (input === correctPassword) {
    window.location.href = "letters.html";
  } else {
    alert("Wrong password! Try again ❤️");
  }
}

// Sidebar toggle
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

