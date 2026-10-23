
const themeButton = document.querySelector("#themeButton");
const yearElement = document.querySelector("#year");

// Display the current year automatically.
yearElement.textContent = new Date().getFullYear();

// Switch between dark and light themes.
themeButton.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light");

  themeButton.textContent = isLight ? "🌙" : "☀️";
  themeButton.setAttribute(
    "aria-label",
    isLight ? "Switch to dark theme" : "Switch to light theme"
  );
});
