// ---- REPLACE ENTIRE script.js WITH THIS ----
// Set the password you want right here:
window.CORRECT_PASSWORD = "jamjam";   // <--- change this if you want another password

console.log("[debug] script.js loaded. CORRECT_PASSWORD=", window.CORRECT_PASSWORD);

// Make checkPassword available globally (called from the page)
window.checkPassword = function() {
  // try a few common ids used in different versions of your HTML
  const possibleIds = ["password", "password-input", "passwordInput", "passwordInputBox"];
  let inputEl = null;
  for (const id of possibleIds) {
    const el = document.getElementById(id);
    if (el) { inputEl = el; break; }
  }

  if (!inputEl) {
    alert("Error: password input element not found on the page. Make sure the input has id='password' or 'password-input'.");
    console.error("[debug] password input element not found. searched ids:", possibleIds);
    return;
  }

  const enteredRaw = inputEl.value;
  const entered = enteredRaw.trim();
  console.log("[debug] entered raw:", JSON.stringify(enteredRaw), "trimmed:", JSON.stringify(entered));

  if (entered === window.CORRECT_PASSWORD) {
    console.log("[debug] password correct — unlocking UI");

    // flap & heart handling (if elements exist)
    const flap = document.getElementById("flap");
    const heart = document.getElementById("heart");
    const envelope = document.getElementById("envelope");
    const sidebar = document.getElementById("sidebar");

    if (flap) flap.classList.add("open");
    if (heart) heart.style.transition = "opacity .8s", heart.style.opacity = 0;
    if (envelope) {
      envelope.style.transition = "transform 1.2s ease";
      envelope.style.transform = "translateY(-120px)";
    }

    // show welcome message (if page has a container or create one)
    let welcome = document.getElementById("welcome-message");
    if (!welcome) {
      welcome = document.createElement("div");
      welcome.id = "welcome-message";
      welcome.style.marginTop = "10px";
      welcome.style.opacity = 0;
      welcome.style.transition = "opacity 1s";
      if (envelope && envelope.parentNode) envelope.parentNode.insertBefore(welcome, envelope.nextSibling);
      else document.body.appendChild(welcome);
    }
    const now = new Date();
    const hours = now.getHours();
    const greeting = hours < 12 ? "Good morning ☀️" : hours < 18 ? "Good afternoon 🌼" : "Good evening 🌙";
    const dateStr = now.toLocaleDateString();
    welcome.innerHTML = `<div style="font-family: 'Special Elite', cursive; font-size:18px;">${greeting}, my love ❤️<br><small style="font-size:12px; color:#666">${dateStr}</small></div>`;
    setTimeout(()=> welcome.style.opacity = 1, 300);

    // show sidebar if exists (add .show class or change left/right depending on your css)
    if (sidebar) {
      sidebar.classList.add("show");
      // also ensure css transitions run (fallback)
      sidebar.style.transition = "left 0.6s ease, opacity 0.6s ease";
      sidebar.style.left = "0";
      sidebar.style.opacity = "1";
    }
  } else {
    console.log("[debug] password incorrect — entered:", JSON.stringify(entered));
    alert("Wrong password! Try again.");
  }
};
