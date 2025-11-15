// Theme Toggle Functionality
const toggleBtn = document.getElementById("toggle-theme");

// Load saved theme (using sessionStorage instead of localStorage)
let currentTheme = "light-theme";
document.body.classList.add(currentTheme);

toggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-theme");
  currentTheme = isLight ? "dark-theme" : "light-theme";

  document.body.classList.remove("light-theme", "dark-theme");
  document.body.classList.add(currentTheme);
});

// Typewriter Effect for Name
const element = document.getElementById("typewritter-name");
const words = ["Rugved", "Agasti"];
let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 120;
const delayBetweenWords = 500; 
const delayBetweenCycles = 1000;

function typeWriter() {
    if (charIndex < words[wordIndex].length) {
        element.innerHTML += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else {
        wordIndex++;

        if (wordIndex < words.length) {
            element.innerHTML += " "; 
            charIndex = 0;
            setTimeout(typeWriter, delayBetweenWords);
        } else {
            setTimeout(() => {
                element.innerHTML = "";
                wordIndex = 0;
                charIndex = 0;
                typeWriter();
            }, delayBetweenCycles);
        }
    }
}
window.onload = typeWriter;