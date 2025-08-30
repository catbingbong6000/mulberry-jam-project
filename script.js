document.getElementById("enterBtn").addEventListener("click", function() {
  const password = document.getElementById("passwordInput").value;
  const correctPassword = "love"; // change this password

  if (password === correctPassword) {
    // Open envelope
    const envelope = document.getElementById("envelope");
    envelope.classList.add("open");

    // Hide password box
    document.getElementById("passwordBox").style.display = "none";

    // Move envelope up
    envelope.style.transition = "all 1.5s ease";
    envelope.style.transform = "translateY(-100px)";

    // Show welcome message
    setTimeout(() => {
      const welcome = document.getElementById("welcome");
      const date = new Date();
      const hours = date.getHours();
      let greeting = "Hello";

      if (hours < 12) greeting = "Good Morning";
      else if (hours < 18) greeting = "Good Afternoon";
      else greeting = "Good Evening";

      welcome.innerHTML = `${greeting}, my love ❤️<br>${date.toDateString()}`;
      welcome.style.display = "block";

      // Show sidebar
      document.getElementById("sidebar").classList.add("show");
    }, 1500);
  } else {
    alert("Wrong password! Try again.");
  }
});
