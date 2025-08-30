function checkPassword() {
  const password = prompt("Enter the secret password:");
  if (password === "love123") {
    window.location.href = "letters.html";
  } else {
    alert("Wrong password! Try again ❤️");
  }
}
