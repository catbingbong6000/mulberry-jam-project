const correctPassword = "mypassword"; // change this!

function checkPassword() {
  const input = document.getElementById("password-input").value;
  if (input === correctPassword) {
    document.getElementById("password-container").style.display = "none";
    const envelope = document.getElementById("envelope");
    envelope.classList.add("open");

    // Greeting based on time
    const now = new Date();
    const hours = now.getHours();
    let greeting = hours < 12 ? "Good morning ☀️" :
                   hours < 18 ? "Good afternoon 🌼" :
                                "Good evening 🌙";

    let date = now.toLocaleDateString("en-US", {
      weekday: "long", year: "numeric", month: "long", day: "numeric"
    });

    const message = document.getElementById("welcome-message");
    message.innerHTML = `${greeting}, my love ❤️<br><small>${date}</small>`;
    setTimeout(() => { message.style.opacity = 1; }, 1500);
  } else {
    alert("Wrong password, try again!");
  }
}

// Sidebar controls
document.getElementById("openSidebar").onclick = () => {
  document.getElementById("sidebar").style.width = "250px";
};
document.getElementById("closeSidebar").onclick = () => {
  document.getElementById("sidebar").style.width = "0";
};
