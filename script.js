function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const correctPassword = "jamjam"; // change if you like
  if (input === correctPassword) {
    document.getElementById("passwordScreen").style.display = "none";
    document.getElementById("envelopeScreen").classList.remove("hidden");
  } else {
    document.getElementById("error").style.display = "block";
  }
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

// Handle letters page
const urlParams = new URLSearchParams(window.location.search);
const letterNumber = urlParams.get('letter');
if (letterNumber) {
  document.getElementById("letterTitle").innerText = `Letter ${letterNumber}`;
  document.getElementById("letterText").innerText = `This is the content of letter ${letterNumber}.`;
}
